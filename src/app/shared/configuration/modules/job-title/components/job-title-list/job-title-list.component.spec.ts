import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtitlelistComponent } from './job-title-list.component';

describe('JobtitlelistComponent', () => {
  let component: JobtitlelistComponent;
  let fixture: ComponentFixture<JobtitlelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobtitlelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobtitlelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
