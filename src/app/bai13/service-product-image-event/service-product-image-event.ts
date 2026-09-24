import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bai13ProductService } from '../bai13-product-service';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false, // Thêm dòng này để fix lỗi NgModule
  templateUrl: './service-product-image-event.html',
  styleUrls: ['./service-product-image-event.css']
})
export class ServiceProductImageEvent {
  public products: any;

  constructor(pservice: Bai13ProductService, private router: Router) {
    this.products = pservice.getProductsWithImages();
  }

  viewDetail(f: any) {
    this.router.navigate(['bai13/products', f.ProductId]);
  }
}