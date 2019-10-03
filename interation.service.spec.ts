import { TestBed } from '@angular/core/testing';

import { InterationService } from './interation.service';

describe('InterationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterationService = TestBed.get(InterationService);
    expect(service).toBeTruthy();
  });
});
