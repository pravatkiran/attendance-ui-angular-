import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionlistComponent } from './division-list.component';

describe('DivisionlistComponent', () => {
  let component: DivisionlistComponent;
  let fixture: ComponentFixture<DivisionlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
