import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-seven-bank-id',
  templateUrl: './seven-bank-id.component.html',
  styleUrls: ['./seven-bank-id.component.css']
})
export class SevenBankIdComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  image = "./assets/bankid1.png";

  goToNext() {
    this.router.navigate(['/eight-creditcard-info']);
  }
}
