import { TestBed, inject } from '@angular/core/testing';

import { NumberServiceService } from './number-service.service';

describe('NumberServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NumberServiceService]
    });
  });

  it('should be created', inject([NumberServiceService], (service: NumberServiceService) => {
    expect(service).toBeTruthy();
  }));
});
