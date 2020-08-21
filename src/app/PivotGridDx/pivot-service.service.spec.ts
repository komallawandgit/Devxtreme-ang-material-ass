import { TestBed, inject } from '@angular/core/testing';

import { PivotServiceService } from './pivot-service.service';

describe('PivotServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PivotServiceService]
    });
  });

  it('should be created', inject([PivotServiceService], (service: PivotServiceService) => {
    expect(service).toBeTruthy();
  }));
});
