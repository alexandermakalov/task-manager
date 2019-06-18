import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  public tasks: Task[] = [];

  ngOnInit(): void {
    this.store.select('taskPage')
      .subscribe(({ tasks }) => {
        this.tasks = tasks;
      })
  }
}
