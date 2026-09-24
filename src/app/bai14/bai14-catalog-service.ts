import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Bai14CatalogService {
  datas = [
    {
      "CateId": "cate1", "CateName": "nuoc ngot",
      "Products": [
        { "ProductId": "p1", "ProductName": "Coca", "Price": 100, "Image": "https://www.coca-cola.com/content/dam/onexp/eg/en/home-images/coca-cola-classic/928x928.png" },
        { "ProductId": "p2", "ProductName": "Pepsi", "Price": 300, "Image": "https://tse1.mm.bing.net/th/id/OIP.WUirQURVjmngl22cFqvDNQHaHa?r=0&pid=Api&h=220&P=0" },
        { "ProductId": "p3", "ProductName": "Sting", "Price": 200, "Image": "https://minhcaumart.vn/media/com_eshop/products/8934588233074.jpg" },
      ]
    },
    {
      "CateId": "cate2", "CateName": "Bia",
      "Products": [
        { "ProductId": "p4", "ProductName": "Heleiken", "Price": 500, "Image": "https://img.websosanh.vn/v2/users/root_product/images/bia-heineken-silver-thung-24-l/0u2a7x3s5awhd.jpg" },
        { "ProductId": "p5", "ProductName": "333", "Price": 400, "Image": "https://product.hstatic.net/200000352097/product/8935012413338_159e90426bd946e5bda2e2fb3df43fd5_1024x1024.png" },
        { "ProductId": "p6", "ProductName": "Sai Gon", "Price": 600, "Image": "https://sabibeco.com/uploads/product/2020_03/bia-lon-saigon-lager.jpg" },
      ]
    },
  ];

  constructor() { }

  getCategories() {
    return this.datas;
  }
}