import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-summary',
  templateUrl: './orders-summary.component.html',
  styleUrls: ['./orders-summary.component.scss']
})
export class OrdersSummaryComponent implements OnInit {

  pieData = [
    {name: 'Linked IN', percentage: 32.6, color: '#6BFCAF', image: './assets/images/linkedin.svg'},
    {name: 'Twitter', percentage: 2.2, color: '#FAFF67', image: './assets/images/twitter.svg'},
    {name: 'Google +', percentage: 2.4, color: '#FD9863', image: './assets/images/google.svg'},
    {name: 'My Site', percentage: 15.1, color: '#B763FD', image: './assets/images/mysite.svg'},
    {name: 'Facebook', percentage: 19.8, color: '#FB71D0', image: './assets/images/facebook.svg'},
    {name: 'Email', percentage: 27.9, color: '#00CFFE', image: './assets/images/email.svg'}
  ];

  totalRevenue = '2,739k';

  constructor() { }

  ngOnInit(): void {
  }

}
