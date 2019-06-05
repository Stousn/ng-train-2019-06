import { InterestRateCalculatorService } from './interest-rate-calculator.service';

fdescribe('InterestRateCalculatorService', () => {
  it('should calculate interest rate correctly', () => {
    // Prepare
    const ircs = new InterestRateCalculatorService();

    // Execute
    const result = ircs.calculateInterestRate(1, 1.1);

    // Check
    expect(result).toBeCloseTo(0.1, 5);
  });

  it('should return zero if original value is zero', () => {
    // Prepare
    const ircs = new InterestRateCalculatorService();

    // Execute
    const result = ircs.calculateInterestRate(0, 42);

    // Check
    expect(result).toBe(0);
  });
});
