import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcualtePriceComponent } from './calcualte-price.component';

describe('CalcualtePriceComponent', () => {
  let component: CalcualtePriceComponent;
  let fixture: ComponentFixture<CalcualtePriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcualtePriceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcualtePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
