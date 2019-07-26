import { TaskItem } from '../components/task-item/task-item';
import { TaskListActionTypes, TaskListActions } from './task-list.actions';

// State for this feature (Product)
export interface DashboardState {
  tasks: TaskItem[],
  selectedTaskItemId: String | null,
}

const initialState: DashboardState = {
  tasks: [],
  selectedTaskItemId: null,
};

export function reducer(state = initialState, action: TaskListActions): DashboardState {

  switch (action.type) {
    case TaskListActionTypes.LoadTasksSuccess:
      return {
        ...state,
        tasks: action.payload
      };

    case TaskListActionTypes.LoadTasksFail:
      return {
        ...state,
        tasks: [],
      };
      case TaskListActionTypes.SetCurrentTask:
        return {
          ...state,
          selectedTaskItemId: action.payload._id
        };
    default:
      return state;
  }
}
