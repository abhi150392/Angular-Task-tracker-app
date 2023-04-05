import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiservice: UiService) {
    this.subscription = this.uiservice
      .onToggle()
      .subscribe((val) => (this.showAddTask = val));
  }

  ngOnInit(): void {}

  toggleAddTask() {
    // console.log('toggle');
    this.uiservice.toggleAddTask();
  }
}
