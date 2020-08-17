import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredOrderStatusComponent } from './delivered-order-status.component';

describe('DeliveredOrderStatusComponent', () => {
  let component: DeliveredOrderStatusComponent;
  let fixture: ComponentFixture<DeliveredOrderStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredOrderStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
