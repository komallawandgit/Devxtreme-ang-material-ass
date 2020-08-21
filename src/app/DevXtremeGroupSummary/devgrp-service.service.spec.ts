import { TestBed, inject } from '@angular/core/testing';

import { DevgrpServiceService } from './devgrp-service.service';

describe('DevgrpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DevgrpServiceService]
    });
  });

  it('should be created', inject([DevgrpServiceService], (service: DevgrpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
