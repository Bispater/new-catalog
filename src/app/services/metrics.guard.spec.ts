import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { metricsGuard } from './metrics.guard';

describe('metricsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => metricsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
