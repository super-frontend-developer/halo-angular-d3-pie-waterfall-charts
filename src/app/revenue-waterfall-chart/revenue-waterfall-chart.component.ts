import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-revenue-waterfall-chart',
  templateUrl: './revenue-waterfall-chart.component.html',
  styleUrls: ['./revenue-waterfall-chart.component.scss']
})
export class RevenueWaterfallChartComponent implements OnInit {

  private margin: any;
  private width: number;
  private height: number;
  private padding: number;

  private waterfallData = [
    {name: 'Last Month Revenue', value: 38297, text: '$38,297', color: '#F8931F', connectorColor: '#3BC36F'},
    {name: 'Gainers', value: 17974, text: '$17,974', color: '#3BC36F', connectorColor: '#EE4B42'},
    {name: 'Losers', value: -3979, text: '$3,979', color: '#EE4B42', connectorColor: '#3BC36F'},
    {name: 'New Entrants', value: 31282, text: '$31,282', color: '#3BC36F', connectorColor: '#EE4B42'},
    {name: 'Exits', value: -20362, text: '$20,362', color: '#EE4B42', connectorColor: '#3BC36F'}
  ];

  constructor() { }

  ngOnInit(): void {
    this.setup();
    this.buildWaterfall(this.waterfallData);
  }

  private setup(){
    this.margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    };
    this.width = 960 - this.margin.left - this.margin.right;
    this.height = 450 - this.margin.top - this.margin.bottom;
    this.padding = 0.3;
  }

  private buildWaterfall(data: any) {

    const x = d3.scaleBand().rangeRound([0, this.width]).padding(this.padding);

    const y = d3.scaleLinear()
      .range([this.height, 0]);

    const xAxis = d3.axisBottom(x).tickSize(0).tickPadding(20);

    const yAxis = d3.axisLeft(y);

    const chart = d3.select('.chart')
      .attr('width', this.width + this.margin.left + this.margin.right)
      .attr('height', this.height + this.margin.top + this.margin.bottom + 50)
      .append('g')
      .attr('transform', 'translate(' + (this.margin.left - this.margin.top) + ',' + (this.margin.top + this.margin.bottom) + ')');

    let cumulative = 0;

    for (const item of data) {
      item.start = cumulative;
      cumulative += item.value;
      item.end = cumulative;

      item.class = ( item.value >= 0 ) ? 'positive' : 'negative';
    }

    data.push({
      name: 'This Month Revenue',
      text: '$63,212',
      end: 55000,
      start: 0,
      color: '#3BC36F',
      class: 'positive'
    });

    x.domain(data.map((d) => d.name));
    y.domain([0, d3.max(data, (d) => d.end)]);

    chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + this.height + ')')
      .call(xAxis)
      .style('font-size', '13px');

    chart.append('g')
      .attr('class', 'y axis')
      .attr('display', 'none')
      .call(yAxis);

    const bar = chart.selectAll('.bar')
      .data(data)
      .enter().append('g')
      .attr('class', (d) => ('bar ' + d.class))
      .attr('transform', (d) => ('translate(' + x(d.name) + ',0)'));

    bar.append('rect')
      .attr('y', (d) => (y( Math.max(d.start, d.end))))
      .attr('height', (d) => Math.abs( y(d.start) - y(d.end)))
      .attr('width', x.bandwidth())
      .attr('fill', (d) => d.color);

    bar.append('text')
      .attr('x', x.bandwidth() / 2)
      .attr('y', (d) => {
        return d.class === 'positive' ? y(d.end) : y(d.start);
      })
      .attr('dy', '-1em')
      .attr('dx', '-1.7em')
      .text((d) => d.text)
      .style('font-size', '13px');

    bar.filter((d, i) => {
        return i !== this.waterfallData.length - 1;
      })
      .append('line')
      .attr('class', 'connector')
      .attr('x1', x.bandwidth() - 1)
      .attr('y1', (d) => {
        return y(d.end);
      })
      .attr('x2', x.bandwidth() / ( 1 - this.padding) + 1)
      .attr('y2', (d) => {
        if (d.name === 'Exits') {
          return y(d.end) + 40;
        } else {
          return y(d.end);
        }
      })
      .attr('stroke', (d) => d.connectorColor)
      .attr('stroke-width', 2)
      .attr('fill', 'none');
  }

  private dollarFormatter(n) {
    n = Math.round(n);
    let result = n;
    if (Math.abs(n) > 1000) {
      result = Math.round(n / 1000) + 'K';
    }
    return '$' + result;
  }
}
