import { TaskItem } from '../components/task-item/task-item';
import { TaskListActionTypes } from './task-list.actions';

// State for this feature (Product)
export interface TaskListState {
  tasks: TaskItem[]
}

const initialState: TaskListState = {
  tasks: [
    {
      id: 1,
      title: 'One',
      author: 'Alex',
    }
  ],
};

export function reducer(state = initialState, action: any): TaskListState {

  switch (action.type) {
    default:
      return state;
  }
}
