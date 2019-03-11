import { TestBed } from '@angular/core/testing';

import { TypeDataService } from './type-data.service';

describe('TypeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeDataService = TestBed.get(TypeDataService);
    expect(service).toBeTruthy();
  });
});
