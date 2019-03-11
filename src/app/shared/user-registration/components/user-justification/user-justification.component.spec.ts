import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserjustificationComponent } from './user-justification.component';

describe('UserjustificationComponent', () => {
  let component: UserjustificationComponent;
  let fixture: ComponentFixture<UserjustificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserjustificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserjustificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
