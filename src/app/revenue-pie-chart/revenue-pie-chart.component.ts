import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-revenue-pie-chart',
  templateUrl: './revenue-pie-chart.component.html',
  styleUrls: ['./revenue-pie-chart.component.scss']
})
export class RevenuePieChartComponent implements AfterViewInit {

  @ViewChild('containerPieChart') element: ElementRef;

  private host: d3.Selection;
  private svg: d3.Selection;
  private width: number;
  private height: number;
  private radius: number;
  private htmlElement: HTMLElement;

  private pieData = [
    {name: 'backpacks', count: 30, percentage: 30, scale: 1.3},
    {name: 'luggage', count: 18, percentage: 18, scale: 1},
    {name: 'bags', count: 25, percentage: 20, scale: 1.3},
    {name: 'accessories', count: 22, percentage: 18, scale: 1.2},
    {name: 'backpacks', count: 5, percentage: 14, scale: 1.1},
  ];

  totalRevenue = '$13,298';

  ngAfterViewInit() {
    this.htmlElement = this.element.nativeElement;
    this.host = d3.select(this.htmlElement);
    this.setup();
    this.buildSVG();
    this.buildPie();
  }

  private setup(): void {
      this.width = 300;
      this.height = 300;
      this.radius = Math.min(this.width, this.height) / 2;
  }

  private buildSVG(): void {
      this.host.html('');
      this.svg = this.host.append('svg')
          .attr('width', this.width)
          .attr('height', this.height)
          .append('g')
          .attr('transform', `translate(${this.width / 2},${this.height / 2})`);

      const defs = this.svg.append('svg:defs');


      const gradient0 = defs.append('svg:linearGradient')
        .attr('id', 'gradient0')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad');

      // first light color
      gradient0.append('svg:stop')
        .attr('offset', '0%')
        .attr('stop-color', '#35B666')
        .attr('stop-opacity', 1);
      // second dark color
      gradient0.append('svg:stop')
        .attr('offset', '100%')
        .attr('stop-color', '#1C8243')
        .attr('stop-opacity', 1);

      const gradient1 = defs.append('svg:linearGradient')
        .attr('id', 'gradient1')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad');

      // first dark color
      gradient1.append('svg:stop')
        .attr('offset', '0%')
        .attr('stop-color', '#D07A20')
        .attr('stop-opacity', 1);
      // second light color
      gradient1.append('svg:stop')
        .attr('offset', '100%')
        .attr('stop-color', '#F6B15A')
        .attr('stop-opacity', 1);

      const gradient2 = defs.append('svg:linearGradient')
        .attr('id', 'gradient2')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad');

      // first dark color
      gradient2.append('svg:stop')
        .attr('offset', '0%')
        .attr('stop-color', '#B5A915')
        .attr('stop-opacity', 1);
      // second light color
      gradient2.append('svg:stop')
        .attr('offset', '100%')
        .attr('stop-color', '#F1D74B')
        .attr('stop-opacity', 1);

      const gradient3 = defs.append('svg:linearGradient')
        .attr('id', 'gradient3')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad');

      // first dark color
      gradient3.append('svg:stop')
        .attr('offset', '0%')
        .attr('stop-color', '#F1B600')
        .attr('stop-opacity', 1);
      // second light color
      gradient3.append('svg:stop')
        .attr('offset', '100%')
        .attr('stop-color', '#BC8201')
        .attr('stop-opacity', 1);

      const gradient4 = defs.append('svg:linearGradient')
        .attr('id', 'gradient4')
        .attr('x1', '0%')
        .attr('y1', '0%')
        .attr('x2', '0%')
        .attr('y2', '100%')
        .attr('spreadMethod', 'pad');

      // first dark color
      gradient4.append('svg:stop')
        .attr('offset', '0%')
        .attr('stop-color', '#EE4B42')
        .attr('stop-opacity', 1);
      // second light color
      gradient4.append('svg:stop')
        .attr('offset', '100%')
        .attr('stop-color', '#C22921')
        .attr('stop-opacity', 1);
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
      const innerRadius = this.radius - 112;
      const outerRadius = this.radius - 40;
      const arc = d3.arc()
          .innerRadius(innerRadius)
          .outerRadius((d) => {
              return (d.data.scale * outerRadius);
          });

      arcSelection.append('path')
          .attr('d', arc)
          .attr('fill', (datum, index) => {
              return 'url(#gradient' + index + ')';
          });

      arcSelection.append('text')
          .attr('transform', (datum: any) => {
              datum.innerRadius = 0;
              datum.outerRadius = outerRadius;
              return 'translate(' + arc.centroid(datum) + ')';
          })
          .text((datum, index) => datum.data.count + '%')
          .style('text-anchor', 'middle')
          .style('fill', 'white')
          .attr('y', 8);

      arcSelection.append('text')
          .attr('text-anchor', 'middle')
          .attr('y', 8)
          .text(this.totalRevenue);
  }
}
