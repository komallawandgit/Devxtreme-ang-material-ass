import { TestBed, inject } from '@angular/core/testing';

import { MatTableDataService } from './mat-table-data.service';

describe('MatTableDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MatTableDataService]
    });
  });

  it('should be created', inject([MatTableDataService], (service: MatTableDataService) => {
    expect(service).toBeTruthy();
  }));
});
