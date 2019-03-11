import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobTitleFormComponent } from './job-title-form.component';

describe('JobTitleFormComponent', () => {
  let component: JobTitleFormComponent;
  let fixture: ComponentFixture<JobTitleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobTitleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobTitleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
