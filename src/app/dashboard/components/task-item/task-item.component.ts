import { Component, OnInit, Input } from '@angular/core';
import { TaskItem } from './task-item';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.sass']
})
export class TaskItemComponent {

  @Input() task: TaskItem;
  @Input() index: number;
}
