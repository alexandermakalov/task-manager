import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from '../model/task.model';

@Injectable()
export class TaskService {

  readonly BASE_URL = 'http://127.0.0.1:3000'

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Task[]> {
    return this.http
      .get<Task[]>(`${this.BASE_URL}/api/tasks`)
      .pipe(
        catchError((error: any) => throwError(error))
      );
  }
}
