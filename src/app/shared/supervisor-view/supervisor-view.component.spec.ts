import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorviewComponent } from './supervisor-view.component';

describe('SupervisorviewComponent', () => {
  let component: SupervisorviewComponent;
  let fixture: ComponentFixture<SupervisorviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupervisorviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
