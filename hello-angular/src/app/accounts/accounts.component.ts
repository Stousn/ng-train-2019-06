import { Component, OnInit } from '@angular/core';
import { InterestRateCalculatorService } from '../interest-rate-calculator.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(ics: InterestRateCalculatorService) { }

  ngOnInit() {
  }

}
