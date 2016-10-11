import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-one-select-savings-goal',
  templateUrl: './one-select-savings-goal.component.html',
  styleUrls: ['./one-select-savings-goal.component.css']
})
export class OneSelectSavingsGoalComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() { }

  selectedSavingsGoal : string = "Initial value";

  setSelectedGoal(goal : string) {
    this.selectedSavingsGoal = goal;
    console.log("User selected", this.selectedSavingsGoal);
    
    if ('annet' === this.selectedSavingsGoal) {
      this.router.navigate(['/two-define-custom-savings-goal']);
    } else {
      this.router.navigate(['/three-set-savings-goal-amount']);
    }
  }
  
}
