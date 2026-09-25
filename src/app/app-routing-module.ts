import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { ServiceProductImageEvent } from './bai13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './bai13/service-product-image-event-detail/service-product-image-event-detail';
import { CatalogComponent } from './bai14/catalog/catalog';
import { CustomerListComponent } from './bai18/customer-list-component/customer-list-component';

const routes: Routes = [
  { path: '', component: Home }, 
  { path: 'bai13/products', component: ServiceProductImageEvent },
  { path: 'bai13/products/:id', component: ServiceProductImageEventDetail },
  { path: 'bai14', component: CatalogComponent },
  { path: 'bai18/customers', component: CustomerListComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }