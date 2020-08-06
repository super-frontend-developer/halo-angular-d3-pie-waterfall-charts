import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-channel-wise-revenue',
  templateUrl: './channel-wise-revenue.component.html',
  styleUrls: ['./channel-wise-revenue.component.scss']
})
export class ChannelWiseRevenueComponent implements OnInit {

  private margin: any;
  private width: number;
  private height: number;
  private padding: number;

  private dataSet = [
    {name: 'session1', revenue: 110, transaction: 800, aov: 100},
    {name: 'session2', revenue: 275, transaction: 710, aov: 400},
    {name: 'session3', revenue: 125, transaction: 1000, aov: 200},
    {name: 'session4', revenue: 175, transaction: 1100, aov: 220},
    {name: 'session5', revenue: 210, transaction: 680, aov: 390},
    {name: 'session6', revenue: 210, transaction: 700, aov: 350}
  ];

  constructor() { }

  ngOnInit(): void {
    this.setup();
    this.buildChart(this.dataSet);
  }

  private setup(){
    this.margin = {
      top: 20,
      right: 20,
      bottom: 30,
      left: 40
    };
    this.width = 513;
    this.height = 303 - this.margin.top - this.margin.bottom;
    this.padding = 0.55;
  }

  private buildChart(data: any) {

    const x = d3.scaleBand().rangeRound([0, this.width]).padding(this.padding);

    const y = d3.scaleLinear().rangeRound([this.height, 0]);

    const y1 = d3.scaleLinear().rangeRound([this.height, 0]);

    const xAxis = d3.axisBottom(x).tickSize(0).tickPadding(20);

    const yAxis = d3.axisLeft(y).ticks(7);

    const yAxisRight = d3.axisRight(y1).ticks(7);

    const chart = d3.select('.chart')
      .attr('width', this.width)
      .attr('height', this.height + this.margin.top + this.margin.bottom + 40)
      .append('g')
      .attr('transform', 'translate(' + (0) + ',' + (this.margin.top + this.margin.bottom) + ')');

    x.domain(data.map((d) => d.name));
    y.domain([0, d3.max(data, (d) => d.revenue)]);
    y1.domain([0, d3.max(data, (d) => d.transaction)]);

    chart.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + this.height + ')')
      .attr('display', 'none')
      .call(xAxis);

    chart.append('g')
      .attr('class', 'y axis')
      .attr('display', 'none')
      .call(yAxis);

    chart.append('g')
      .attr('class', 'y axis')
      .attr('display', 'none')
      .attr('transform', 'translate(' + this.width + ' ,0)')
      .call(yAxisRight);


    const defs = chart.append('svg:defs');

    const gradient = defs.append('svg:linearGradient')
      .attr('id', 'gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%')
      .attr('spreadMethod', 'pad');

    // first light color
    gradient.append('svg:stop')
      .attr('offset', '0%')
      .attr('stop-color', '#6BA1F2')
      .attr('stop-opacity', 1);
    // second dark color
    gradient.append('svg:stop')
      .attr('offset', '100%')
      .attr('stop-color', '#1364DC')
      .attr('stop-opacity', 1);

    const bar = chart.selectAll('rect')
      .data(data)
      .enter().append('g');

    const transactionCircle = chart.selectAll('.transaction-dot')
      .data(data);

    const aovCircle = chart.selectAll('.aov-dot')
      .data(data);

    // bar chart
    bar.append('path')
      .style('fill', 'url(#gradient)')
      .attr('d', d => this.roundedRect(
        x(d.name),
        y(d.revenue),
        x.bandwidth(),
        y(0) - y(d.revenue),
        [10, 10, 10, 10]
      ));

    // transaction line chart
    const transactionLine = d3.line()
      .x((d, i) => {
        return x(d.name) + x.bandwidth() / 2;
      })
      .y((d) => {
        return y(d.transaction / 4);
      })
      .curve(d3.curveMonotoneX);

    bar.append('path')
    .attr('class', 'transaction-line')
    .attr('d', transactionLine(data));

    transactionCircle.enter().append('circle')
        .attr('class', 'transaction-dot')
        .attr('cx', (d, i) => {
          return x(d.name) + x.bandwidth() / 2;
        })
        .attr('cy', (d) => {
          return y(d.transaction / 4);
        })
        .attr('r', 5);

    // aov line chart
    const aovLine = d3.line()
      .x((d, i) => {
        return x(d.name) + x.bandwidth() / 2;
      })
      .y((d) => {
        return y(d.aov / 4);
      })
      .curve(d3.curveMonotoneX);

    bar.append('path')
    .attr('class', 'aov-line')
    .attr('d', aovLine(data));

    aovCircle.enter().append('circle')
        .attr('class', 'aov-dot')
        .attr('cx', (d, i) => {
          return x(d.name) + x.bandwidth() / 2;
        })
        .attr('cy', (d) => {
          return y(d.aov / 4);
        })
        .attr('r', 5);

    const chart1 = d3.select('.chart1')
      .style('width', '100%')
      .attr('height', this.height + this.margin.top + this.margin.bottom + 50)
      .append('g')
      .attr('transform', 'translate(' + (this.margin.top + this.margin.bottom) + ',' + (this.margin.top + this.margin.bottom) + ')');

    chart1.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + this.height + ')')
      .attr('display', 'none')
      .call(xAxis);

    chart1.append('g')
      .attr('class', 'y axis')
      .style('font-size', '13px')
      .style('color', '#707070')
      .call(yAxis)
      .append('text')
      .style('font-size', '14px')
      .style('fill', '#A8A8A8')
      .attr('transform', 'rotate(-90)')
      .attr('dy', '-2.3rem')
      .attr('dx', '-2.3rem')
      .text('Revenue (in thousands)');

    chart1.append('g')
      .attr('class', 'y axis')
      .style('font-size', '13px')
      .style('color', '#707070')
      .attr('transform', 'translate(' + (this.width + 10) + ' ,0)')
      .call(yAxisRight)
      .append('text')
      .style('font-size', '14px')
      .style('fill', '#A8A8A8')
      .attr('transform', 'rotate(-270)')
      .attr('dy', '-2.7rem')
      .attr('dx', '2.3rem')
      .text('Transactions & AOV (in nos)');
  }

  arc = (r, sign) => r ? `a${r * sign[0]},${r * sign[1]} 0 0 1 ${r * sign[2]},${r * sign[3]}` : '';

  private roundedRect(x, y, width, height, r) {
    r = [Math.min(r[0], height, width),
        Math.min(r[1], height, width),
        Math.min(r[2], height, width),
        Math.min(r[3], height, width)];

    return `M${x + r[0]},${y
    }h${width - r[0] - r[1]}${this.arc(r[1], [1, 1, 1, 1])
    }v${height - r[1] - r[2]}${this.arc(r[2], [1, 1, -1, 1])
    }h${-width + r[2] + r[3]}${this.arc(r[3], [1, 1, -1, -1])
    }v${-height + r[3] + r[0]}${this.arc(r[0], [1, 1, 1, -1])
    }z`;
  }
}
