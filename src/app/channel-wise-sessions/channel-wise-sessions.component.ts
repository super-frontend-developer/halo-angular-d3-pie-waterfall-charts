import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-channel-wise-sessions',
  templateUrl: './channel-wise-sessions.component.html',
  styleUrls: ['./channel-wise-sessions.component.scss']
})
export class ChannelWiseSessionsComponent implements AfterViewInit {

  @ViewChild('containerPieChart') element: ElementRef;

  private host: d3.Selection;
  private svg: d3.Selection;
  private width: number;
  private height: number;
  private radius: number;
  private htmlElement: HTMLElement;

  pieData = [
    {name: 'Linked IN', percentage: 32.6, color: '#6BFCAF', image: './assets/images/linkedin.svg'},
    {name: 'Twitter', percentage: 2.2, color: '#FAFF67', image: './assets/images/twitter.svg'},
    {name: 'Google +', percentage: 2.4, color: '#FD9863', image: './assets/images/google.svg'},
    {name: 'My Site', percentage: 15.1, color: '#B763FD', image: './assets/images/mysite.svg'},
    {name: 'Facebook', percentage: 19.8, color: '#FB71D0', image: './assets/images/facebook.svg'},
    {name: 'Email', percentage: 27.9, color: '#00CFFE', image: './assets/images/email.svg'}
  ];

  totalRevenue = '2,739k';

  ngAfterViewInit() {
    this.htmlElement = this.element.nativeElement;
    this.host = d3.select(this.htmlElement);
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
    this.host.html('');
    this.svg = this.host.append('svg')
        .attr('width', this.width)
        .attr('height', this.height)
        .append('g')
        .attr('transform', `translate(${this.width / 2},${this.height / 2})`);
  }

  private buildPie(): void {
    const pie = d3.pie()
    .sort(null)
    .value((d) => {
        return d.percentage;
    });

    const arcSelection = this.svg.selectAll('.arc')
        .data(pie(this.pieData))
        .enter()
        .append('g')
        .attr('class', 'arc');

    this.populatePie(arcSelection);
  }

  private populatePie(arcSelection: any): void {
    const innerRadius = this.radius - 30;
    const outerRadius = this.radius;
    const arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius);

    arcSelection.append('path')
        .attr('d', arc)
        .attr('fill', (datum, index) => datum.data.color);
  }
}
