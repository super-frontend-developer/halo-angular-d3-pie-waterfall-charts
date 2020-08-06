import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelWiseSessionsComponent } from './channel-wise-sessions.component';

describe('ChannelWiseSessionsComponent', () => {
  let component: ChannelWiseSessionsComponent;
  let fixture: ComponentFixture<ChannelWiseSessionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelWiseSessionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelWiseSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
