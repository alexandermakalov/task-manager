import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromTasks from './../../state'
import { TaskItem } from '../../components/task-item/task-item';
import * as taskListActions from '../../state/task-list.actions';


@Component({
  templateUrl: './dashboard-shell.component.html'
})
export class DashboardShellComponent implements OnInit {
  tasks$: Observable<TaskItem[]>;
  selectedTask$: Observable<TaskItem>;

  constructor(private store: Store<fromTasks.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new taskListActions.LoadTasks());
    this.tasks$ = this.store.pipe(select(fromTasks.getTasks));
    this.selectedTask$ = this.store.pipe(select(fromTasks.getCurrentTask))
  }

  taskSelected(task: TaskItem): void {
    this.store.dispatch(new taskListActions.SetCurrentTask(task));
  }

  deleteTask(task: TaskItem): void {
    // this.store.dispatch(new productActions.DeleteProduct(product.id));
    console.log('Delete', task);
  }

  clearTask(): void {
    // this.store.dispatch(new productActions.ClearCurrentProduct());
    console.log('clearProduct');
  }
  saveTask(task: TaskItem): void {
    // this.store.dispatch(new productActions.CreateProduct(product));
    console.log('saveProduct', task);
  }

  updateTask(task: TaskItem): void {
    this.store.dispatch(new taskListActions.UpdateTask(task));
    console.log('updateProduct', task);
  }
}
