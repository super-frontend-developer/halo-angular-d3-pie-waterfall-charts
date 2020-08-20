import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingLocationComponent } from './shipping-location.component';

describe('ShippingLocationComponent', () => {
  let component: ShippingLocationComponent;
  let fixture: ComponentFixture<ShippingLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
