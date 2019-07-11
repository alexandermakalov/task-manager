import { Component, OnInit, Input } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromTasks from '../../state'
import * as taskListActions from '../../state/task-list.actions';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: TaskItem[];
  constructor(private store: Store<fromTasks.State>) { }

  ngOnInit(): void {
    
  }
}
