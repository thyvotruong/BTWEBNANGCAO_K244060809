import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerGroup } from './customer.model';

@Injectable({
  providedIn: 'root'
})
export class Bai18CustomerService {
  private url = '/customers.json';

  constructor(private http: HttpClient) { }

  getCustomerGroups(): Observable<CustomerGroup[]> {
    return this.http.get<CustomerGroup[]>(this.url);
  }
}