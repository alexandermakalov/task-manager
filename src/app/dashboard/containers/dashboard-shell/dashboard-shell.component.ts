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

  constructor(private store: Store<fromTasks.State>) {}

  ngOnInit(): void {
    this.store.dispatch(new taskListActions.LoadTasks());
    this.tasks$ = this.store.pipe(select(fromTasks.getTasks));
  }
}
