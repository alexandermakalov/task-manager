import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { TaskItem } from '../dashboard/components/task-item/task-item';

@Injectable()
export class TaskService {

  readonly BASE_URL = 'http://127.0.0.1:3000'

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<TaskItem[]> {
    return this.http
      .get<TaskItem[]>(`${this.BASE_URL}/api/tasks`)
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }
}
