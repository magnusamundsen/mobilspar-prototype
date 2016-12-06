import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { AccountComponent } from './account/account.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalStore } from './shared/goalStore';
import {MaterialModule} from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    GoalsComponent,
    GoalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [GoalStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
