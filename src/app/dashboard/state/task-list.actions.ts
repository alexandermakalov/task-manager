import { TaskItem } from '../components/task-item/task-item';

/* NgRx */
import { Action } from '@ngrx/store';

export enum TaskListActionTypes {
    LoadTasks = '[Dashboard] Load',
    LoadTasksSuccess = '[Dashboard] Load Tasks Success',
    LoadTasksFail = '[Dashboard] Load Tasks Fail',
    SetCurrentTask = '[Dashboard] Set Current Task',
}

export class LoadTasks implements Action {
    readonly type = TaskListActionTypes.LoadTasks;
}

export class LoadTasksSuccess implements Action {
    readonly type = TaskListActionTypes.LoadTasksSuccess;

    constructor(public payload: TaskItem[]) { }
}

export class LoadTasksFail implements Action {
    readonly type = TaskListActionTypes.LoadTasksFail;

    constructor(public payload: string) { }
}

export class SetCurrentTask implements Action {
    readonly type = TaskListActionTypes.SetCurrentTask;
  
    constructor(public payload: TaskItem) { }
  }

export type TaskListActions = LoadTasks |
    LoadTasksSuccess |
    LoadTasksFail |
    SetCurrentTask;