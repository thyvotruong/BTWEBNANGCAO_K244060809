import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Bai18CustomerService } from '../bai18-customer-service';
import { CustomerGroup } from '../customer.model';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './customer-list-component.html',
  styleUrls: ['./customer-list-component.css']
})
export class CustomerListComponent implements OnInit {
  customerGroups: CustomerGroup[] = [];
  errorMessage: string = '';

  // Inject ChangeDetectorRef vào constructor
  constructor(
    private customerService: Bai18CustomerService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  // Đưa vào hàm riêng để gọi lại khi cần
  loadCustomers(): void {
    this.customerService.getCustomerGroups().subscribe({
      next: (data) => {
        this.customerGroups = data;
        // Ép Angular cập nhật lại giao diện ngay lập tức
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.errorMessage = 'Không thể tải dữ liệu khách hàng!';
        console.error(err);
      }
    });
  }
}