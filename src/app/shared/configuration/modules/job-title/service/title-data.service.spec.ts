import { TestBed } from '@angular/core/testing';

import { TitleDataService } from './title-data.service';

describe('TitleDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TitleDataService = TestBed.get(TitleDataService);
    expect(service).toBeTruthy();
  });
});
