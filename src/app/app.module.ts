import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    RevenuePieChartComponent,
    RevenueWaterfallChartComponent,
    CategoriesComponent,
    WinnersComponent,
    NewProductsComponent,
    CollectionsComponent,
    ChannelWiseSessionsComponent,
    ChannelWiseRevenueComponent,
    OrdersSummaryComponent,
    RevenueOrderStatusComponent,
    DeliveredOrderStatusComponent,
    DeliveredOrderStatusChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
