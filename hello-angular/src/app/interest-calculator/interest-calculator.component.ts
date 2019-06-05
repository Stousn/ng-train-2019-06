import { Component, OnInit } from '@angular/core';
import { InterestRateCalculatorService } from '../interest-rate-calculator.service';

@Component({
  selector: 'app-interest-calculator',
  templateUrl: './interest-calculator.component.html',
  styleUrls: ['./interest-calculator.component.css']
})
export class InterestCalculatorComponent implements OnInit {

  originalValue: number;
  valueWithInterests: number;
  result: number;

  constructor(private ircs: InterestRateCalculatorService) { }

  ngOnInit() {
  }

  calculate() {
    this.result = this.ircs.calculateInterestRate(
      this.originalValue, this.valueWithInterests);
  }

}
