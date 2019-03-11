import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPositionFormComponent } from './job-position-form.component';

describe('JobPositionFormComponent', () => {
  let component: JobPositionFormComponent;
  let fixture: ComponentFixture<JobPositionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobPositionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPositionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
