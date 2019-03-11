import { JobPositionModule } from './job-position.module';

describe('JobPositionModule', () => {
  let jobPositionModule: JobPositionModule;

  beforeEach(() => {
    jobPositionModule = new JobPositionModule();
  });

  it('should create an instance', () => {
    expect(jobPositionModule).toBeTruthy();
  });
});
