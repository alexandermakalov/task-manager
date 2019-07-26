import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../state/app.state';
import * as fromTasks from './task-list.reducer';

// Extends the app state to include the product feature.
// This is required because products are lazy loaded.
// So the reference to ProductState cannot be added to app.state.ts directly.
export interface State extends fromRoot.State {
    tasks: fromTasks.DashboardState;
}

// Selector functions
const getDashboardState = createFeatureSelector<fromTasks.DashboardState>('tasks');

export const getTasks = createSelector(
    getDashboardState,
    state => state.tasks
);

export const getCurrentTaskId = createSelector(
    getDashboardState,
    state => state.selectedTaskItemId
);

export const getCurrentTask = createSelector(
    getDashboardState,
    getCurrentTaskId,
    (state, currentTaskId) => {
        if (currentTaskId === 'new') {
            return {
                _id: 'new',
                title: 'new title',
                author: 'new author'
            };
        } else {
            return currentTaskId ? state.tasks.find(p => p._id === currentTaskId) : null;
        }
    }
);
