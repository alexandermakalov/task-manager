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

        case TaskListActionTypes.UpdateTaskSuccess:
          const updatedTasks = state.tasks.map(
            item => action.payload._id === item._id ? action.payload : item);
          return {
            ...state,
            tasks: updatedTasks,
            selectedTaskItemId: action.payload._id,
          };
    
        case TaskListActionTypes.UpdateTaskFail:
          return {
            ...state,
            selectedTaskItemId: null
          };

          case TaskListActionTypes.CreateTaskSuccess:
            return {
              ...state,
              tasks: [...state.tasks, action.payload],
              selectedTaskItemId: action.payload._id,
            };
      
          case TaskListActionTypes.CreateTaskFail:
            return {
              ...state,
              selectedTaskItemId: null
            };

            case TaskListActionTypes.DeleteTaskSuccess:
              return {
                ...state,
                tasks: state.tasks.filter(task => task._id !== action.payload),
                selectedTaskItemId: null
              };
        
            case TaskListActionTypes.DeleteTaskFail:
              return {
                ...state,
                selectedTaskItemId: null
              };

              case TaskListActionTypes.CreateEmptyTask:
                return {
                  ...state,
                  selectedTaskItemId: 'new'
                };
    default:
      return state;
  }
}
