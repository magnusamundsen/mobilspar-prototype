import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as moment from 'moment';
import { GoalStore } from '../shared/goalStore';
import { Goal } from '../shared/goal';
import { ToasterService } from 'angular2-toaster/angular2-toaster';



@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goalId: number;
  goal: Goal;
  new: boolean = false;

  private sub: any;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private goalStore : GoalStore,
    private toasterService: ToasterService
  ) {}

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      this.goalId = +params['id'];
      console.log(isNaN(this.goalId) ? "Did not find an existing id in URL. Should create a new goal." : "Found an ID in URL. Should fetch existing goal with id %s.", this.goalId);

      if (isNaN(this.goalId)) {
        this.createNewGoal();
      } else {
        this.getExistingGoal();
      }
    });

    moment.locale('no');
  }    

  onSwitchChange(event) {
    if (event === 'automaticSaving') {
      if (this.goal.automaticSaving) {
          this.toasterService.pop('success', 'Kommer snart', 'Daglig sparebeløp trekkes automatisk fra konto');
      }
    }

    if (event === 'saveWithOthers') {
      if (this.goal.saveWithOthers) {
          this.toasterService.pop('success', 'Kommer snart', 'Her kan du velge fra kontaklisten din hvem du vil invitere til sosial sparing. Dere sparer mot samme mål, men eier selv deres egen spareandel');
      }
    }
  }


  onModelChange(event) {
    if (this.goal.howMuch > 0 && 
        this.goal.when != undefined && 
        this.goal.when.length != 0 ) {
          let days = moment(this.goal.when).diff(moment().format('YYYY-MM-DD'), 'days');
          let howMuchPerDay = Math.round(this.goal.howMuch / days);

          if (howMuchPerDay === Infinity) {
            howMuchPerDay = -1;
          }

          this.goal.howMuchPerDay = howMuchPerDay;
      }


  }

  createNewGoal() {
    this.new = true;
    this.goal = new Goal();
    this.goal.id = this.goalStore.getGoals().length;
  }

  getExistingGoal() {
    this.goal = this.goalStore.getGoals()[this.goalId];
    if (this.goal == undefined) {
      this.createNewGoal();
      console.log("Goal with id %s was not found. Creating new.", this.goalId, this.goal);
    } else {
      console.log("Goal with id %s found.", this.goalId, this.goal);
    }
  }

  saveGoal() {
    console.log("Saving goal %s", this.goal.id, this.goal);
    if (this.new) {  
      this.goalStore.addGoal(this.goal); 
    }
    this.router.navigate(['/goals']);
  }

  onWhenChanged() {
    console.log(this.goal.when);
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    } else {
        return null;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  } 
}
