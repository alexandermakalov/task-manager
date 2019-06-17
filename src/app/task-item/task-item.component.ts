import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent {

  @Input() task: Task;
}
