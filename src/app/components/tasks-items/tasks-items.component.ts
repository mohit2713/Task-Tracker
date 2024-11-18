import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-items',
  templateUrl: './tasks-items.component.html',
  styleUrls: ['./tasks-items.component.css'],
})
export class TasksItemsComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }
  onToogle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
