import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEvent } from './bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './bai13/service-product-image-event-detail/service-product-image-event-detail';

const routes: Routes = [
  { path: 'bai13/products', component: ServiceProductImageEvent },
  { path: 'bai13/products/:id', component: ServiceProductImageEventDetail },
  { path: '', redirectTo: 'bai13/products', pathMatch: 'full' } // Tự động vào bài 13 khi mở web
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
