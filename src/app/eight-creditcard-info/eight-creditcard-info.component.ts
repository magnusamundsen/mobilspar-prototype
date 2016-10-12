import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eight-creditcard-info',
  templateUrl: './eight-creditcard-info.component.html',
  styleUrls: ['./eight-creditcard-info.component.css']
})
export class EightCreditcardInfoComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  image = "./assets/creditcard.png";

  goToNext() {
    this.router.navigate(['/nine-creditcard-verified']);
  }

}
