import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-four-user-risk-compliance-verification',
  templateUrl: './four-user-risk-compliance-verification.component.html',
  styleUrls: ['./four-user-risk-compliance-verification.component.css']
})
export class FourUserRiskComplianceVerificationComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  setRisk(level : String) {
    let riskLevel = level;
    console.log("Risk level:", riskLevel);
    this.router.navigate(['/five-savings-portfolio-risk-distribution']);
  }

}
