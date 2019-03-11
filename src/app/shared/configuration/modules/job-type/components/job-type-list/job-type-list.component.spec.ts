import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtypelistComponent } from './job-type-list.component';

describe('JobtypelistComponent', () => {
  let component: JobtypelistComponent;
  let fixture: ComponentFixture<JobtypelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobtypelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobtypelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
