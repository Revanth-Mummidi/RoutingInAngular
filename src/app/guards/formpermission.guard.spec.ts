import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { formpermissionGuard } from './formpermission.guard';

describe('formpermissionGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => formpermissionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
