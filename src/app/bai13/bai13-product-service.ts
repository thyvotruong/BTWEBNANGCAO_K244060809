import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Bai13ProductService {
  productImage = [
    {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"https://www.coca-cola.com/content/dam/onexp/eg/en/home-images/coca-cola-classic/928x928.png"},
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"https://tse1.mm.bing.net/th/id/OIP.WUirQURVjmngl22cFqvDNQHaHa?r=0&pid=Api&h=220&P=0"},
    {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"https://minhcaumart.vn/media/com_eshop/products/8934588233074.jpg"}
  ]
  constructor() { }

  getProductsWithImages() {
    return this.productImage;
  }

  getProductDetail(id: any) {
    return this.productImage.find(x => x.ProductId == id);
  }
}