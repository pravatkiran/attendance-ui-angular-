import { NgModalModule } from './ng-modal.module';

describe('NgModalsModule', () => {
  let ngModalModule: NgModalModule;

  beforeEach(() => {
    ngModalModule = new NgModalModule();
  });

  it('should create an instance', () => {
    expect(ngModalModule).toBeTruthy();
  });
});
