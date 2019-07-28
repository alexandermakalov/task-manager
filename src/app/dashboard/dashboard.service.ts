import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { TaskItem } from './components/task-item/task-item';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  readonly BASE_URL = 'http://127.0.0.1:3000';
  private tasksUrl = 'tasks';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<TaskItem[]> {
    return this.http.get<TaskItem[]>(`${this.BASE_URL}/${this.tasksUrl}`)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }
  createTask(task: TaskItem): Observable<TaskItem> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    task._id = null;
    return this.http.post<TaskItem>(`${this.BASE_URL}/task`, task, { headers: headers })
      .pipe(
        tap(data => console.log('createTask: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  updateTask(task: TaskItem): Observable<TaskItem> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.BASE_URL}/task/${task._id}`;
    return this.http.put<TaskItem>(url, task, { headers: headers })
      .pipe(
        tap(() => console.log('updateTask: ' + task._id)),
        // Return the product on an update
        map(() => task),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}
