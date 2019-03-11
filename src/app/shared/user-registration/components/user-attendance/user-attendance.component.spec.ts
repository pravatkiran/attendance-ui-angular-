import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserattendanceComponent } from './user-attendance.component';

describe('UserattendanceComponent', () => {
  let component: UserattendanceComponent;
  let fixture: ComponentFixture<UserattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
