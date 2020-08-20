import { Component, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';
import { States } from './states';

@Component({
  selector: 'app-shipping-location',
  templateUrl: './shipping-location.component.html',
  styleUrls: ['./shipping-location.component.scss']
})
export class ShippingLocationComponent implements AfterViewInit {

  private width: number;
  private height: number;
  private proj: any;
  private path: any;
  private color = '#2FBB68';

  deliveredLocations = [
    {name: 'Gujarath', percentage: 25, value: 200, isIncrease: true},
    {name: 'Bihar', percentage: 10, value: 125, isIncrease: true},
    {name: 'Karnataka', percentage: 5, value: 110, isIncrease: true},
    {name: 'Tamilnadu', percentage: 4, value: 100, isIncrease: false},
    {name: 'Kerala', percentage: 2, value: 95, isIncrease: false}
  ];

  ngAfterViewInit() {
    this.setup();
    this.buildMap();
  }

  private setup(): void {
    this.width = 340;
    this.height = 340;
    this.proj = d3.geoMercator().scale(600).translate([-695, 420]);
    this.path = d3.geoPath().projection(this.proj);
  }

  private buildMap(): void {
    const maxTotal = d3.max(States.features, (d) => d.total);

    const map = d3.select('#chart').append('svg:svg')
    .attr('width', this.width)
    .attr('height', this.height);

    const india = map.append('svg:g')
      .attr('id', 'india');

    india.selectAll('path')
      .data(States.features)
      .enter().append('path')
      .attr('d', this.path)
      .style('fill', this.color)
      .style('opacity', (d) => d.total / maxTotal);
  }
}
