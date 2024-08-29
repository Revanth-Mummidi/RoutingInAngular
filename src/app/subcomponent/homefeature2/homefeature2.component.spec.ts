import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homefeature2Component } from './homefeature2.component';

describe('Homefeature2Component', () => {
  let component: Homefeature2Component;
  let fixture: ComponentFixture<Homefeature2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homefeature2Component]
    });
    fixture = TestBed.createComponent(Homefeature2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
