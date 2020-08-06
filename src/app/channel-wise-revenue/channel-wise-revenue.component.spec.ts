import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelWiseRevenueComponent } from './channel-wise-revenue.component';

describe('ChannelWiseRevenueComponent', () => {
  let component: ChannelWiseRevenueComponent;
  let fixture: ComponentFixture<ChannelWiseRevenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelWiseRevenueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelWiseRevenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
