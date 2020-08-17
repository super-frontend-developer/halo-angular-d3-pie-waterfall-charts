import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevenuePieChartComponent } from './revenue-pie-chart/revenue-pie-chart.component';
import { RevenueWaterfallChartComponent } from './revenue-waterfall-chart/revenue-waterfall-chart.component';
import { CategoriesComponent } from './categories/categories.component';
import { WinnersComponent } from './winners/winners.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { CollectionsComponent } from './collections/collections.component';
import { ChannelWiseSessionsComponent } from './channel-wise-sessions/channel-wise-sessions.component';
import { ChannelWiseRevenueComponent } from './channel-wise-revenue/channel-wise-revenue.component';
import { OrdersSummaryComponent } from './orders-summary/orders-summary.component';
import { RevenueOrderStatusComponent } from './revenue-order-status/revenue-order-status.component';
import { DeliveredOrderStatusComponent } from './delivered-order-status/delivered-order-status.component';
import { DeliveredOrderStatusChartsComponent } from './delivered-order-status-charts/delivered-order-status-charts.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'delivered-order-status', pathMatch: 'full'
  },
  {
    path: 'revenue-pie-chart', component: RevenuePieChartComponent
  },
  {
    path: 'revenue-waterfall-chart', component: RevenueWaterfallChartComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  },
  {
    path: 'winners', component: WinnersComponent
  },
  {
    path: 'new-products', component: NewProductsComponent
  },
  {
    path: 'collections', component: CollectionsComponent
  },
  {
    path: 'channel-wise-sessions', component: ChannelWiseSessionsComponent
  },
  {
    path: 'channel-wise-revenue', component: ChannelWiseRevenueComponent
  },
  {
    path: 'orders-summary', component: OrdersSummaryComponent
  },
  {
    path: 'revenue-order-status', component: RevenueOrderStatusComponent
  },
  {
    path: 'delivered-order-status', component: DeliveredOrderStatusComponent
  },
  {
    path: 'delivered-order-status-charts', component: DeliveredOrderStatusChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
