import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-five-savings-portfolio-risk-distribution',
  templateUrl: './five-savings-portfolio-risk-distribution.component.html',
  styleUrls: ['./five-savings-portfolio-risk-distribution.component.css']
})
export class FiveSavingsPortfolioRiskDistributionComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  image = "./assets/aksje_dist.png";

  goToNext() {
    this.router.navigate(['/six-setup-fundaccount']);
  }

}
