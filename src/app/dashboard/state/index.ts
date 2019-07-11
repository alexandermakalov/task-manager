import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromTasks from './task-list.reducer';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends fromRoot.State {
    tasks: fromTasks.TaskListState;
}

// Selector functions
const getTasksFeatureState = createFeatureSelector<fromTasks.TaskListState>('taskPage');

export const getTasks = createSelector(
    getTasksFeatureState,
    state => state.tasks
);
