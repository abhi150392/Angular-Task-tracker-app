import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string;
  day: string;
  reminder: boolean = false;
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiservice: UiService) {
    this.subscription = this.uiservice
      .onToggle()
      .subscribe((val) => (this.showAddTask = val));
  }

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text && !this.day) {
      alert('enter the task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    //@ti-do emit an event

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
