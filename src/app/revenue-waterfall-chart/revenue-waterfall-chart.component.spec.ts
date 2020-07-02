import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevenueWaterfallChartComponent } from './revenue-waterfall-chart.component';

describe('RevenueWaterfallChartComponent', () => {
  let component: RevenueWaterfallChartComponent;
  let fixture: ComponentFixture<RevenueWaterfallChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevenueWaterfallChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevenueWaterfallChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
