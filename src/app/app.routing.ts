import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OneSelectSavingsGoalComponent } from './one-select-savings-goal/one-select-savings-goal.component';
import { TwoDefineCustomSavingsGoalComponent } from './two-define-custom-savings-goal/two-define-custom-savings-goal.component';
import { ThreeSetSavingsGoalAmountComponent } from './three-set-savings-goal-amount/three-set-savings-goal-amount.component';
import { FourUserRiskComplianceVerificationComponent } from './four-user-risk-compliance-verification/four-user-risk-compliance-verification.component';
import { FiveSavingsPortfolioRiskDistributionComponent } from './five-savings-portfolio-risk-distribution/five-savings-portfolio-risk-distribution.component';
import { SixSetupFundaccountComponent } from './six-setup-fundaccount/six-setup-fundaccount.component';
import { SevenBankIdComponent } from './seven-bank-id/seven-bank-id.component';
import { EightCreditcardInfoComponent } from './eight-creditcard-info/eight-creditcard-info.component';
import { NineCreditcardVerifiedComponent } from './nine-creditcard-verified/nine-creditcard-verified.component';
import { TenSavingsGoalCreatedReceiptComponent } from './ten-savings-goal-created-receipt/ten-savings-goal-created-receipt.component';


const appRoutes: Routes = [
  { path: 'one-select-savings-goal', component: OneSelectSavingsGoalComponent },
  { path: 'two-define-custom-savings-goal', component: TwoDefineCustomSavingsGoalComponent },
  { path: 'three-set-savings-goal-amount', component: ThreeSetSavingsGoalAmountComponent },
  { path: 'four-user-risk-compliance-verification', component: FourUserRiskComplianceVerificationComponent },
  { path: 'five-savings-portfolio-risk-distribution', component: FiveSavingsPortfolioRiskDistributionComponent},
  { path: 'six-setup-fundaccount', component: SixSetupFundaccountComponent },
  { path: 'seven-bank-id', component: SevenBankIdComponent },
  { path: 'eight-creditcard-info', component: EightCreditcardInfoComponent},
  { path: 'nine-creditcard-verified', component: NineCreditcardVerifiedComponent},
  { path: 'ten-savings-goal-created-receipt', component: TenSavingsGoalCreatedReceiptComponent},
  { path: '', component: OneSelectSavingsGoalComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
