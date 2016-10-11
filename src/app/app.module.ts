import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

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

@NgModule({
  declarations: [
    AppComponent,
    OneSelectSavingsGoalComponent,
    TwoDefineCustomSavingsGoalComponent,
    ThreeSetSavingsGoalAmountComponent,
    FourUserRiskComplianceVerificationComponent,
    FiveSavingsPortfolioRiskDistributionComponent,
    SixSetupFundaccountComponent,
    SevenBankIdComponent,
    EightCreditcardInfoComponent,
    NineCreditcardVerifiedComponent,
    TenSavingsGoalCreatedReceiptComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
