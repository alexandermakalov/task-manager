import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  EventEmitter,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TaskItem } from '../task-item/task-item';
import { GenericValidator } from '../../../shared/generic-validator';
import { NumberValidators } from '../../../shared/number.validator';

@Component({
  selector: 'tm-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit, OnChanges, OnDestroy {
  pageTitle = 'Task Edit';
  @Input() errorMessage: string;
  @Input() selectedTask: TaskItem;
  @Output() create = new EventEmitter<TaskItem>();
  @Output() update = new EventEmitter<TaskItem>();
  @Output() delete = new EventEmitter<TaskItem>();
  @Output() clearCurrent = new EventEmitter<void>();

  componentActive = true;
  taskForm: FormGroup;

  task: TaskItem | null;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(private fb: FormBuilder) {
    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      title: {
        required: 'Task name is required.',
        minlength: 'Task name must be at least three characters.',
        maxlength: 'Task name cannot exceed 50 characters.'
      },
      author: {
        required: 'Author is required.'
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    // Define the form group
    this.taskForm = this.fb.group({
      title: ['', [Validators.required,
                         Validators.minLength(3),
                         Validators.maxLength(50)]],
      author: ['', Validators.required],
    });

    // Watch for value changes
    this.taskForm.valueChanges.subscribe(
      value => this.displayMessage = this.genericValidator.processMessages(this.taskForm)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {

    // patch form with value from the store
    if (changes.selectedTask) {
      const product: any = changes.selectedTask.currentValue as TaskItem;
      this.displayTask(product);
    }
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }

  // Also validate on blur
  // Helpful if the user tabs through required fields
  blur(): void {
    this.displayMessage = this.genericValidator.processMessages(this.taskForm);
  }

  displayTask(task: TaskItem | null): void {
    // Set the local product property
    this.task = task;

    if (this.task && this.taskForm) {
      // Reset the form back to pristine
      this.taskForm.reset();

      // Display the appropriate page title
      if (this.task._id === 'new') {
        this.pageTitle = 'Add Product';
      } else {
        this.pageTitle = `Edit Product: ${this.task.title}`;
      }

      // Update the data on the form
      this.taskForm.patchValue({
        title: this.task.title,
        author: this.task.author,
      });
    }
  }

  cancelEdit(): void {
    // Redisplay the currently selected product
    // replacing any edits made
    this.displayTask(this.task);
  }

  deleteTask(): void {
    if (this.task && this.task._id) {
      if (confirm(`Really delete the product: ${this.task.title}?`)) {
        this.delete.emit(this.task);
      }
    } else {
      // No need to delete, it was never saved
      this.clearCurrent.emit();
    }
  }

  saveTask(): void {
    if (this.taskForm.valid) {
      if (this.taskForm.dirty) {
        // Copy over all of the original product properties
        // Then copy over the values from the form
        // This ensures values not on the form, such as the Id, are retained
        const p = { ...this.task, ...this.taskForm.value };

        if (p.id === 0) {
          this.create.emit(p);
        } else {
          this.update.emit(p);
        }
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }
}
