import { Component } from '@angular/core';
import { User } from './shared/user';
import { Goal } from './shared/goal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  goals: Goal[];
}
