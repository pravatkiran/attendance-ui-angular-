import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficelocationlistComponent } from './office-location-list.component';

describe('OfficelocationlistComponent', () => {
  let component: OfficelocationlistComponent;
  let fixture: ComponentFixture<OfficelocationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficelocationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficelocationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
