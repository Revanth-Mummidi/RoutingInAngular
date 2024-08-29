import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productfeature2Component } from './productfeature2.component';

describe('Productfeature2Component', () => {
  let component: Productfeature2Component;
  let fixture: ComponentFixture<Productfeature2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Productfeature2Component]
    });
    fixture = TestBed.createComponent(Productfeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
