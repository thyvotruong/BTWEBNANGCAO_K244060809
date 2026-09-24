import { TestBed } from '@angular/core/testing';
import { Bai14CatalogService } from './bai14-catalog-service';

describe('Bai14CatalogService', () => {
  let service: Bai14CatalogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bai14CatalogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
