import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RevenuePieChartComponent } from './revenue-pie-chart/revenue-pie-chart.component';
import { RevenueWaterfallChartComponent } from './revenue-waterfall-chart/revenue-waterfall-chart.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'revenue-pie-chart', pathMatch: 'full'
  },
  {
    path: 'revenue-pie-chart', component: RevenuePieChartComponent
  },
  {
    path: 'revenue-waterfall-chart', component: RevenueWaterfallChartComponent
  },
  {
    path: 'categories', component: CategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
