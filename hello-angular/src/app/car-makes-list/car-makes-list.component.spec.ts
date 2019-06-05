import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMakesListComponent } from './car-makes-list.component';

describe('CarMakesListComponent', () => {
  let component: CarMakesListComponent;
  let fixture: ComponentFixture<CarMakesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarMakesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMakesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
