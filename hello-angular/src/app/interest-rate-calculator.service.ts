import { Injectable } from '@angular/core';

export interface IInterestRateCalculatorService {
  calculateInterestRate(originalValue: number, valueWithInterestRate: number): number;
}

@Injectable({
  providedIn: 'root'
})
export class InterestRateCalculatorService implements IInterestRateCalculatorService {

  constructor() { }

  calculateInterestRate(originalValue: number, valueWithInterestRate: number): number {
    // Just for demo...
    if (originalValue === 0) {
      return 0;
    }

    return valueWithInterestRate / originalValue - 1;
  }
}
