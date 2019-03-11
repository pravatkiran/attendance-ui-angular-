import { JobTitleModule } from './job-title.module';

describe('JobTitleModule', () => {
  let jobTitleModule: JobTitleModule;

  beforeEach(() => {
    jobTitleModule = new JobTitleModule();
  });

  it('should create an instance', () => {
    expect(jobTitleModule).toBeTruthy();
  });
});
