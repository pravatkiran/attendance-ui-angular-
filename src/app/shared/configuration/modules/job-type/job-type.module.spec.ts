import { JobTypeModule } from './job-type.module';

describe('JobTypeModule', () => {
  let jobTypeModule: JobTypeModule;

  beforeEach(() => {
    jobTypeModule = new JobTypeModule();
  });

  it('should create an instance', () => {
    expect(jobTypeModule).toBeTruthy();
  });
});
