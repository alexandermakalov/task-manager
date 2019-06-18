import { Task } from '../model/task.model';
import { Action } from '@ngrx/store';
import { TASK_ACTION } from './tasks.action';

const initialState = {
    tasks: [
        new Task('Task 1', 'Alex'),
        new Task('Task 2', 'Max'),
        new Task('Task 3', 'Max'),
        new Task('Task 4', 'Max'),
    ]
}

export function tasksReducer(state = initialState, action: Action) {
    switch (action.type) {
        case TASK_ACTION.LOAD_TASKS:{

        }
        default:
            return state

    }

}