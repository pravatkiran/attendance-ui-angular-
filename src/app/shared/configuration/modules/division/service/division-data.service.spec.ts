import { TestBed } from '@angular/core/testing';

import { DivisionDataService } from './division-data.service';

describe('DivisionDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivisionDataService = TestBed.get(DivisionDataService);
    expect(service).toBeTruthy();
  });
});
