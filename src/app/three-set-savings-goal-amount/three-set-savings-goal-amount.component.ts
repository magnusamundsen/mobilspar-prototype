import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-three-set-savings-goal-amount',
  templateUrl: './three-set-savings-goal-amount.component.html',
  styleUrls: ['./three-set-savings-goal-amount.component.css']
})
export class ThreeSetSavingsGoalAmountComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  title = 'Hvor mye skal du spare?';
  amount = 0;

}
