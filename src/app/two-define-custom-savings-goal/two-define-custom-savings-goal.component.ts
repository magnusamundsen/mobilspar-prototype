import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two-define-custom-savings-goal',
  templateUrl: './two-define-custom-savings-goal.component.html',
  styleUrls: ['./two-define-custom-savings-goal.component.css']
})
export class TwoDefineCustomSavingsGoalComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  title = 'Legg inn egendefinert sparemål'

}
