import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseremploymentComponent } from './user-employment.component';

describe('UseremploymentComponent', () => {
  let component: UseremploymentComponent;
  let fixture: ComponentFixture<UseremploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseremploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseremploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
