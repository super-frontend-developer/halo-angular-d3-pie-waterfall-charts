import { Component, OnInit } from '@angular/core';

export interface IProduct {
  id: number;
  productName: string;
  productImage: string;
  change: number;
  revenueShare: number;
  revenue: string;
}

@Component({
  selector: 'app-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss']
})
export class WinnersComponent implements OnInit {

  Top5Winners: IProduct[] = [
    {
      id: 1,
      productName: 'Aviano Slim Brief',
      productImage: 'assets/images/aviano.jpg',
      change: 527,
      revenueShare: 7,
      revenue: '3,092'
    },
    {
      id: 2,
      productName: 'International Carry-On',
      productImage: 'assets/images/carry-on.jpg',
      change: 393,
      revenueShare: 5,
      revenue: '2,313'
    },
    {
      id: 3,
      productName: 'Zip-Around Travel Wallet',
      productImage: 'assets/images/wallet.jpg',
      change: 352,
      revenueShare: 4,
      revenue: '1,575'
    },
    {
      id: 4,
      productName: 'Rivas Backpack',
      productImage: 'assets/images/rivas-backpack.jpg',
      change: 111,
      revenueShare: 2,
      revenue: '1,082'
    },
    {
      id: 5,
      productName: 'Canton Crossbody',
      productImage: 'assets/images/crossbody.jpg',
      change: 779,
      revenueShare: 2,
      revenue: '709'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
