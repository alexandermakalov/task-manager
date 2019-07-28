import { TaskItem } from '../components/task-item/task-item';

/* NgRx */
import { Action } from '@ngrx/store';

export enum TaskListActionTypes {
    LoadTasks = '[Dashboard] Load',
    LoadTasksSuccess = '[Dashboard] Load Tasks Success',
    LoadTasksFail = '[Dashboard] Load Tasks Fail',
    SetCurrentTask = '[Dashboard] Set Current Task',
    UpdateTask = '[Dashboard] Update Task',
    UpdateTaskSuccess = '[Dashboard] Update Task Success',
    UpdateTaskFail = '[Dashboard] Update Task Fail',
    CreateTask = '[Dashboard] Create Task',
    CreateTaskSuccess = '[Dashboard] Create Task Success',
    CreateTaskFail = '[Dashboard] Create Task Fail',
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

  export class UpdateTask implements Action {
    readonly type = TaskListActionTypes.UpdateTask;
    constructor(public payload: TaskItem) {};
}

export class UpdateTaskSuccess implements Action {
    readonly type = TaskListActionTypes.UpdateTaskSuccess;

    constructor(public payload: TaskItem) { }
}

export class UpdateTaskFail implements Action {
    readonly type = TaskListActionTypes.UpdateTaskFail;

    constructor(public payload: string) { }
}

export class CreateTask implements Action {
    readonly type = TaskListActionTypes.CreateTask;
    constructor(public payload: TaskItem) {};
}

export class CreateTaskSuccess implements Action {
    readonly type = TaskListActionTypes.CreateTaskSuccess;

    constructor(public payload: TaskItem) { }
}

export class CreateTaskFail implements Action {
    readonly type = TaskListActionTypes.CreateTaskFail;

    constructor(public payload: string) { }
}

export type TaskListActions = LoadTasks |
    LoadTasksSuccess |
    LoadTasksFail |
    SetCurrentTask |
    UpdateTask |
    UpdateTaskSuccess |
    UpdateTaskFail |
    CreateTask |
    CreateTaskSuccess |
    CreateTaskFail;