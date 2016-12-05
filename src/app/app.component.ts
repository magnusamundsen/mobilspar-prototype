import { Component } from '@angular/core';
import { Goal } from './shared/goal';
import { Router } from '@angular/router';
import { GoalStore } from './shared/goalStore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  goals: Goal[];

  constructor(private router : Router, private store : GoalStore) {}

  ngOnInit() {
    this.goals = this.store.getGoals();
  }

  createNewGoal() {
    let goal = new Goal();
    goal.id = this.goals.length;

    this.router.navigate(['/goal', { id: goal.id }]);
  }

  navigateTo(route) {
    this.router.navigate(['/' + route]);
  }
}
