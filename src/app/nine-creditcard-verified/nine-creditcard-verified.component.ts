import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nine-creditcard-verified',
  templateUrl: './nine-creditcard-verified.component.html',
  styleUrls: ['./nine-creditcard-verified.component.css']
})
export class NineCreditcardVerifiedComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  image = "./assets/creditcard.png";

  goToNext() {
    this.router.navigate(['/one-select-savings-goal']);
  }

}
