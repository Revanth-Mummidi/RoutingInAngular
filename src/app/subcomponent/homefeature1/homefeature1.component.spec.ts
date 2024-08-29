import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homefeature1Component } from './homefeature1.component';

describe('Homefeature1Component', () => {
  let component: Homefeature1Component;
  let fixture: ComponentFixture<Homefeature1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homefeature1Component]
    });
    fixture = TestBed.createComponent(Homefeature1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
