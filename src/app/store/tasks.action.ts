import { Action } from '@ngrx/store';
import { Task } from '../model/task.model';

export namespace TASK_ACTION {
    export const LOAD_TASKS = '[TASKS] Load task'
}

export class LoadTasks implements Action {
    readonly type = TASK_ACTION.LOAD_TASKS;
    constructor(public payload: Task) {}
}