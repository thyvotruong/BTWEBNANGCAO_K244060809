import { Component } from '@angular/core';
import { Bai14CatalogService } from '../bai14-catalog-service';

@Component({
  selector: 'app-catalog',
  standalone: false,
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css']
})
export class CatalogComponent {
  public categories: any;

  constructor(catService: Bai14CatalogService) {
    this.categories = catService.getCategories();
  }
}