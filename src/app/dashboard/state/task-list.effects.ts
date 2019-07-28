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

  @Effect()
  updateTask$: Observable<Action> = this.actions$.pipe(
    ofType(taskListActions.TaskListActionTypes.UpdateTask),
    map((action: taskListActions.UpdateTask) => action.payload),
    mergeMap((task: TaskItem) =>
      this.dashboardService.updateTask(task).pipe(
        map(updatedTask => (new taskListActions.UpdateTaskSuccess(updatedTask))),
        catchError(err => of(new taskListActions.UpdateTaskFail(err)))
      )
    )
  );

  @Effect()
  createTask$: Observable<Action> = this.actions$.pipe(
    ofType(taskListActions.TaskListActionTypes.CreateTask),
    map((action: taskListActions.CreateTask) => action.payload),
    mergeMap((task: TaskItem) =>
      this.dashboardService.createTask(task).pipe(
        map(createdTask => (new taskListActions.CreateTaskSuccess(createdTask))),
        catchError(err => of(new taskListActions.CreateTaskFail(err)))
      )
    )
  );

  @Effect()
  deleteTask$: Observable<Action> = this.actions$.pipe(
    ofType(taskListActions.TaskListActionTypes.DeleteTask),
    map((action: taskListActions.DeleteTask) => action.payload),
    mergeMap((taskId: string) =>
      this.dashboardService.deleteTask(taskId).pipe(
        map(() => (new taskListActions.DeleteTaskSuccess(taskId))),
        catchError(err => of(new taskListActions.DeleteTaskFail(err)))
      )
    )
  );
}
