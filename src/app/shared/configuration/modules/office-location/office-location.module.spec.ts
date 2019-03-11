import { OfficeLocationModule } from './office-location.module';

describe('OfficeLocationModule', () => {
  let officeLocationModule: OfficeLocationModule;

  beforeEach(() => {
    officeLocationModule = new OfficeLocationModule();
  });

  it('should create an instance', () => {
    expect(officeLocationModule).toBeTruthy();
  });
});
