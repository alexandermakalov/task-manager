import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent {  

  constructor() { }

  public tasks: Task[] = [
    new Task('Task 1', 'Alex'),
    new Task('Task 2', 'Max'),
    new Task('Task 3', 'Max'),
  ]

}
