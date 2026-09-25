import { TestBed } from '@angular/core/testing';
import { Bai18CustomerService } from './bai18-customer-service';

describe('Bai18CustomerService', () => {
  let service: Bai18CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bai18CustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
