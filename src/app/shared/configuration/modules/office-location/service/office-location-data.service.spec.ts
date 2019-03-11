import { TestBed } from '@angular/core/testing';

import { OfficeLocationDataService } from './office-location-data.service';

describe('OfficeLocationDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfficeLocationDataService = TestBed.get(OfficeLocationDataService);
    expect(service).toBeTruthy();
  });
});
