import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoalStore } from '../shared/goalStore';
import { Goal } from '../shared/goal';
import { UUID } from 'angular2-uuid';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Injectable }     from '@angular/core';

declare var bankaxept:any;

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})

@Injectable()
export class GoalsComponent implements OnInit {

  store: GoalStore;
  goals: Goal[];
  router: Router;
  selectedGoal: number;
  howMuch: number;
  showSaveDialog: boolean = false;
  showGoalActionsFor: boolean = false;
  badges: any;
  showBadge: boolean = false;
  badgeText: string;
  badgeExplanation: string;

  constructor(store: GoalStore, router: Router, private http: Http) { 
    this.store = store;
    this.router = router;
    this.goals = [];
    this.badges = {
      firstGoal: false,
      firstDeposit: false,
      first50percentReached: false,
      firstGoalMet: false
    }
  }

  getPercentage(goal: Goal) {
    return Math.floor((goal.saved / goal.howMuch) * 100);
  }

  toggleSelectedGoal(id: number) {
    if (this.selectedGoal === id) {
      this.selectedGoal = undefined;
    } else {
      this.selectedGoal = id;
    }
  }

  toggleBadge() {
    this.showBadge = true;
    setTimeout(() => {
      this.showBadge = false;
    }, 3000);
  }

  addSavings() {
    let goal = this.goals[this.selectedGoal];

    console.log("addSavings: Adding %s to ",this.howMuch, goal);
    console.log("addSavings: Old balance %s", goal.saved);
    goal.saved = parseFloat(goal.saved+ "") + parseFloat(this.howMuch +"");
    console.log("addSavings: New balance %s",goal.saved);

    this.howMuch = undefined; 
    this.selectedGoal = undefined;
    this.showSaveDialog = false;

    //this.initiateBankAxeptPayment();

    // Badges
    /*if (!this.badges.firstDeposit && !this.badges.firstDeposit) {
      this.badges.firstDeposit = true;
      this.badgeText = "Første innskudd!";
      this.badgeExplanation = "Fortsett slik, så er du snart i mål! :)";
      this.toggleBadge();
    }*/

    if (this.getPercentage(goal) > 50 && !this.badges.first50percentReached) {
      this.badges.first50percentReached = true;
      this.badgeText = "Halvveis!";
      this.badgeExplanation = "Målet er nærmere enn noen gang :)";
      this.toggleBadge();
    }

    if (this.getPercentage(goal) > 99 && !this.badges.firstGoalMet) {
      this.badges.firstGoalMet = true;
      this.badgeText = "Jippi!!";
      this.badgeExplanation = "Endelig i mål! Nå er det bare å tømme sparegrisen og realisere målet! :)";
      this.toggleBadge();
    }

  }

  initiateBankAxeptPayment() {
    let uuid = UUID.UUID();

    let payload = {
      "merchantID": "30303",
      "serviceType": "IMMEDIATE_DELIVERY_OF_GOODS",
      "product": "ONLINE",
      "amount": 100, // read from user input
      "orderID": uuid,
      "currency": "NOK",
      "language": "no"
    };

    let bodyString = JSON.stringify(payload); // Stringify payload
    let headers = new Headers({ 'Content-Type': 'application/json',
                                'Api-Key': "diemenvych3csubsn3l35jofmd544ppssoz21",
                                'Request-Identifier': uuid });
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.post("/merchant/register/payment", bodyString, options) // ...using post request
                      .subscribe((res:Response) => 
                      bankaxept.startConsumerTransaction( res.json().paymentToken, '#'));

  }

  ngOnInit() {
    this.goals = this.store.getGoals();
    if (this.goals.length > 1 && !this.badges.firstGoal) {
      this.badges.firstGoal = true;
      this.badgeText = "Første sparemål laget!";
      this.badgeExplanation = "Nå er det bare å gjøre første innskudd, så er du i gang! :)";
      this.toggleBadge();
    }
  }

}
