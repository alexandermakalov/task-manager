import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromTasks from './../dashboard/state';
import * as taskListActions from './../dashboard/state/task-list.actions';

@Component({
  selector: 'tm-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  pageTitle = 'Task Managemer';

  get isLoggedIn(): boolean {
    return false;
  }

  get userName(): string {
    return '%userName%';
  }

  constructor(private store: Store<fromTasks.State>) {}

  ngOnInit() {}

  logOut(): void {}

  createEmptyTask() {
    this.store.dispatch(new taskListActions.CreateEmptyTask());
  }
}
