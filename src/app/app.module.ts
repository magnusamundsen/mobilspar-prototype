import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { GoalComponent } from './goal/goal.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalStore } from './shared/goalStore';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { StatsComponent } from './stats/stats.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ConfigComponent } from './config/config.component';
import { InfoComponent } from './info/info.component';
import { ToasterModule, ToasterService } from 'angular2-toaster/angular2-toaster';

@NgModule({
  declarations: [
    AppComponent,
    GoalsComponent,
    GoalComponent,
    StatsComponent,
    AchievementsComponent,
    ConfigComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    ToasterModule
  ],
  providers: [GoalStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
