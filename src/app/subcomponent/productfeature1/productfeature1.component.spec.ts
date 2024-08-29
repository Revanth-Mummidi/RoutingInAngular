import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productfeature1Component } from './productfeature1.component';

describe('Productfeature1Component', () => {
  let component: Productfeature1Component;
  let fixture: ComponentFixture<Productfeature1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Productfeature1Component]
    });
    fixture = TestBed.createComponent(Productfeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
