import { Component, OnInit } from '@angular/core';

export interface ICollection {
  id: number;
  collectionName: string;
  totalRevenuePercent: number;
  totalImpressionsPercent: number;
  januaryMTD: {
    revenue: string;
    impressions: string;
  };
  februaryMTD: {
    revenue: string;
    impressions: string;
  };
}

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collections: ICollection[] = [
    {
      id: 1,
      collectionName: 'Alpha Bravo',
      totalRevenuePercent: 917,
      totalImpressionsPercent: 2901,
      januaryMTD: {
        revenue: '1,238',
        impressions: '27,149'
      },
      februaryMTD: {
        revenue: '12,584',
        impressions: '8,14,707'
      }
    },
    {
      id: 2,
      collectionName: 'Harrison',
      totalRevenuePercent: 168,
      totalImpressionsPercent: -32,
      januaryMTD: {
        revenue: '2,005',
        impressions: '9,64,319'
      },
      februaryMTD: {
        revenue: '5,375',
        impressions: '6,56,815'
      }
    },
    {
      id: 3,
      collectionName: 'Nassau',
      totalRevenuePercent: 166,
      totalImpressionsPercent: 509,
      januaryMTD: {
        revenue: '750',
        impressions: '31,717'
      },
      februaryMTD: {
        revenue: '1,995',
        impressions: '1,93,202'
      }
    },
    {
      id: 4,
      collectionName: 'Merge',
      totalRevenuePercent: 83,
      totalImpressionsPercent: 6,
      januaryMTD: {
        revenue: '1,292',
        impressions: '2,58,575'
      },
      februaryMTD: {
        revenue: '2,359',
        impressions: '2,72,892'
      }
    },
    {
      id: 5,
      collectionName: 'Voyageur',
      totalRevenuePercent: 0,
      totalImpressionsPercent: -32,
      januaryMTD: {
        revenue: '16,161',
        impressions: '18,53,288'
      },
      februaryMTD: {
        revenue: '16,162',
        impressions: '12,52,119'
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
