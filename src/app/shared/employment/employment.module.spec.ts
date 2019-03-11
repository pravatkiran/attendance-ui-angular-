import { EmploymentModule } from './employment.module';

describe('EmploymentModule', () => {
  let employmentModule: EmploymentModule;

  beforeEach(() => {
    employmentModule = new EmploymentModule();
  });

  it('should create an instance', () => {
    expect(employmentModule).toBeTruthy();
  });
});
