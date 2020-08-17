import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredOrderStatusChartsComponent } from './delivered-order-status-charts.component';

describe('DeliveredOrderStatusChartsComponent', () => {
  let component: DeliveredOrderStatusChartsComponent;
  let fixture: ComponentFixture<DeliveredOrderStatusChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredOrderStatusChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredOrderStatusChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
