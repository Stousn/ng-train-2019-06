import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCalculatorComponent } from './interest-calculator.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { InterestRateCalculatorService, IInterestRateCalculatorService } from '../interest-rate-calculator.service';

fdescribe('InterestCalculatorComponent', () => {
  let component: InterestCalculatorComponent;
  let fixture: ComponentFixture<InterestCalculatorComponent>;
  let de: DebugElement;
  let ne: HTMLElement;
  let ircsMock /*: IInterestRateCalculatorService*/: any;

  beforeEach(async(() => {
    ircsMock = {
      calculateInterestRate: jasmine.createSpy('calculateInterestRate')
        .and.returnValue(0.42)
    };

    TestBed.configureTestingModule({
      declarations: [ InterestCalculatorComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: InterestRateCalculatorService, useValue: ircsMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCalculatorComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    ne = de.nativeElement;
    fixture.detectChanges();
  });

  it('should calculate if user clicks button', () => {
    const original: HTMLInputElement = ne.querySelector('#original');
    const interest: HTMLInputElement = ne.querySelector('#interest');
    const calcButton: HTMLButtonElement = ne.querySelector('#calc');
    const result: HTMLSpanElement = ne.querySelector('#result');

    original.value = '1';
    original.dispatchEvent(new Event('input'));
    interest.value = '1.2';
    interest.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    calcButton.click();
    fixture.detectChanges();

    expect(result.innerText).toBe('42%');
    expect(ircsMock.calculateInterestRate).toHaveBeenCalledTimes(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain empty value initially', () => {
    expect(component.originalValue).toBeUndefined();
    expect(component.valueWithInterests).toBeUndefined();
  });

  it('should trigger interest calculation', () => {
    component.originalValue = 1;
    component.valueWithInterests = 1.2;

    component.calculate();

    expect(component.result).toBeCloseTo(0.42, 5);
  });
});
