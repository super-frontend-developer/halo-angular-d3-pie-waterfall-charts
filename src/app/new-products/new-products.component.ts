import { Component, OnInit } from '@angular/core';

export interface IProduct {
  id: number;
  productName: string;
  productImage: string;
  revenue: string;
}

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.scss']
})
export class NewProductsComponent implements OnInit {

  newProducts: IProduct[] = [
    {
      id: 1,
      productName: 'Short Trip Packing Case',
      productImage: 'assets/images/packing-case.jpg',
      revenue: '3,092'
    },
    {
      id: 2,
      productName: 'Nellis Backpack',
      productImage: 'assets/images/crossbody.jpg',
      revenue: '2,313'
    },
    {
      id: 3,
      productName: 'Short Trip Exp Packing Case',
      productImage: 'assets/images/carry-on.jpg',
      revenue: '1,575'
    },
    {
      id: 4,
      productName: 'Mauren Tote',
      productImage: 'assets/images/mauren-tote.jpg',
      revenue: '1,082'
    },
    {
      id: 5,
      productName: 'Hagen Backpack',
      productImage: 'assets/images/hagen.jpg',
      revenue: '709'
    }
  ];

  exitProducts: IProduct[] = [
    {
      id: 1,
      productName: 'International Exp Carry On',
      productImage: 'assets/images/exp-carry-on.jpg',
      revenue: '2,047'
    },
    {
      id: 2,
      productName: 'Troy Backpack',
      productImage: 'assets/images/troy-backpack.jpg',
      revenue: '1,287'
    },
    {
      id: 3,
      productName: 'Short Trip Exp 4 Whl Packing Case',
      productImage: 'assets/images/whl-packing-case.jpg',
      revenue: '1,090'
    },
    {
      id: 4,
      productName: 'Garment Tri-Fold Carry On',
      productImage: 'assets/images/garment-carry-on.jpg',
      revenue: '990'
    },
    {
      id: 5,
      productName: 'Tegra-Lite Exp Carry on',
      productImage: 'assets/images/tegra-carry-on.jpg',
      revenue: '973'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
