import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-delivered-order-status-charts',
  templateUrl: './delivered-order-status-charts.component.html',
  styleUrls: ['./delivered-order-status-charts.component.scss']
})
export class DeliveredOrderStatusChartsComponent implements AfterViewInit {

  @ViewChild('processingPieChart') element1: ElementRef;
  @ViewChild('shippingPieChart') element2: ElementRef;

  private host1: d3.Selection;
  private host2: d3.Selection;
  private svg1: d3.Selection;
  private svg2: d3.Selection;
  private width: number;
  private height: number;
  private radius: number;
  private htmlElement1: HTMLElement;
  private htmlElement2: HTMLElement;

  pieData = [
    {name: 'Greater', percentage: 43, color: '#F17C7C', value: 100},
    {name: 'Equal', percentage: 5, color: '#E4D83A', value: 10},
    {name: 'Less', percentage: 52, color: '#67C998', value: 120},
  ];

  ngAfterViewInit() {
    this.htmlElement1 = this.element1.nativeElement;
    this.host1 = d3.select(this.htmlElement1);

    this.htmlElement2 = this.element2.nativeElement;
    this.host2 = d3.select(this.htmlElement2);

    this.setup();
    this.buildSVG();
    this.buildPie();
  }

  private setup(): void {
    this.width = 203;
    this.height = 203;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  private buildSVG(): void {
    this.host1.html('');
    this.svg1 = this.host1.append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
        .append('g')
        .attr('transform', `translate(${this.width / 2},${this.height / 2})`);

    this.host2.html('');
    this.svg2 = this.host2.append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
        .append('g')
        .attr('transform', `translate(${this.width / 2},${this.height / 2})`);

    const defs1 = this.svg1.append('svg:defs');
    const defs2 = this.svg2.append('svg:defs');

    const gradient10 = defs1.append('svg:linearGradient')
      .attr('id', 'gradient10')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad');

    // first light color
    gradient10.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#F17C7C')
      .attr('stop-opacity', 1);
    // second dark color
    gradient10.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#F17C7C')
      .attr('stop-opacity', 1);

    const gradient11 = defs1.append('svg:linearGradient')
      .attr('id', 'gradient11')
      .attr('x1', '15%')
      .attr('y1', '0%')
      .attr('x2', '40%')
      .attr('y2', '50%')
      .attr('spreadMethod', 'pad');

    // first dark color
    gradient11.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#000000')
      .attr('stop-opacity', 0.8);
    // second light color
    gradient11.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#E4D83A')
      .attr('stop-opacity', 1);

    const gradient12 = defs1.append('svg:linearGradient')
      .attr('id', 'gradient12')
      .attr('x1', '5%')
      .attr('y1', '10%')
      .attr('x2', '8%')
      .attr('y2', '21%')
      .attr('spreadMethod', 'pad');

    // first dark color
    gradient12.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#000000')
      .attr('stop-opacity', 0.8);
    // second light color
    gradient12.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#67C998')
      .attr('stop-opacity', 1);


    const gradient20 = defs2.append('svg:linearGradient')
      .attr('id', 'gradient20')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad');

    // first light color
    gradient20.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#F17C7C')
      .attr('stop-opacity', 1);
    // second dark color
    gradient20.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#F17C7C')
      .attr('stop-opacity', 1);

    const gradient21 = defs2.append('svg:linearGradient')
      .attr('id', 'gradient21')
      .attr('x1', '100%')
      .attr('y1', '0%')
      .attr('x2', '40%')
      .attr('y2', '25%')
      .attr('spreadMethod', 'pad');

    // first dark color
    gradient21.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#000000')
      .attr('stop-opacity', 0.8);
    // second light color
    gradient21.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#E4D83A')
      .attr('stop-opacity', 1);

    const gradient22 = defs2.append('svg:linearGradient')
      .attr('id', 'gradient22')
      .attr('x1', '100%')
      .attr('y1', '10%')
      .attr('x2', '82%')
      .attr('y2', '15%')
      .attr('spreadMethod', 'pad');

    // first dark color
    gradient22.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#000000')
      .attr('stop-opacity', 0.8);
    // second light color
    gradient22.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#67C998')
      .attr('stop-opacity', 1);
  }

  private buildPie(): void {
    const pie = d3.pie()
    .sort(null)
    .value((d) => {
        return d.percentage;
    });

    const arcSelection1 = this.svg1.selectAll('.arc')
        .data(pie(this.pieData))
        .enter()
        .append('g')
        .attr('class', 'arc');

    const arcSelection2 = this.svg2.selectAll('.arc')
        .data(pie(this.pieData))
        .enter()
        .append('g')
        .attr('class', 'arc');

    const innerRadius = this.radius - 30;
    const outerRadius = this.radius;
    const arc1 = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle((d) => d.startAngle - Math.PI/2)
        .endAngle((d) => d.endAngle - Math.PI/2);
    const arc2 = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    arcSelection1.append('path')
      .attr('d', arc1)
      .attr('fill', (datum, index) => {
        return 'url(#gradient1' + index + ')';
      });

    arcSelection2.append('path')
      .attr('d', arc2)
      .attr('fill', (datum, index) => {
        return 'url(#gradient2' + index + ')';
      });
  }
}
