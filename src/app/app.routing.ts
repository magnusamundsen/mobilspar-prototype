import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalComponent } from './goal/goal.component';
import { StatsComponent } from './stats/stats.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ConfigComponent } from './config/config.component';
import { InfoComponent } from './info/info.component';

const appRoutes: Routes = [
  { path: 'info', component: InfoComponent },
  { path: 'config', component: ConfigComponent },
  { path: 'achievements', component: AchievementsComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'goal', component: GoalComponent },
  { path: '', redirectTo: '/goals', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
