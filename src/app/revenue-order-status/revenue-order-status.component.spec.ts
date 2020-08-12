import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueOrderStatusComponent } from './revenue-order-status.component';

describe('RevenueOrderStatusComponent', () => {
  let component: RevenueOrderStatusComponent;
  let fixture: ComponentFixture<RevenueOrderStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueOrderStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
