import { Task } from '../model/task.model';

export interface AppState {
    taskPage: {
        tasks: Task[]
    }
}