import { TaskItem } from '../components/task-item/task-item';

/* NgRx */
import { Action } from '@ngrx/store';
import { TaskListState } from './task-list.reducer';

export enum TaskListActionTypes {
TestCheck = '[TaskList] test check'
}

// Action Creators
export class TestCheck implements Action {
    readonly type = TaskListActionTypes.TestCheck;
}

export type TaskListActions = TestCheck;