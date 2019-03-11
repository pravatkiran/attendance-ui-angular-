import { TestBed } from '@angular/core/testing';

import { GradeDataService } from './grade-data.service';

describe('GradeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GradeDataService = TestBed.get(GradeDataService);
    expect(service).toBeTruthy();
  });
});
