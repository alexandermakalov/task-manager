import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { DashboardService } from '../dashboard.service';
import { TaskItem } from './../components/task-item/task-item';

/* NgRx */
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as taskListActions from './task-list.actions';

@Injectable()
export class DashboardEffects {

  constructor(private dashboardService: DashboardService,
              private actions$: Actions) { }

  @Effect()
  loadTasks$: Observable<Action> = this.actions$.pipe(
    ofType(taskListActions.TaskListActionTypes.LoadTasks),
    mergeMap(action =>
      this.dashboardService.getProducts().pipe(
        map(tasks => (new taskListActions.LoadTasksSuccess(tasks))),
        catchError(err => of(new taskListActions.LoadTasksFail(err)))
      )
    )
  );
}
