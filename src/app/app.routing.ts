import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { GoalsComponent } from './goals/goals.component';
import { GoalComponent } from './goal/goal.component';


const appRoutes: Routes = [
  { path: 'account', component: AccountComponent },
  { path: 'goals', component: GoalsComponent },
  { path: 'goal', component: GoalComponent },
  { path: '', redirectTo: '/goals', pathMatch: 'full'}
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
