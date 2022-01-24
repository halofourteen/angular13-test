import { TestBed } from '@angular/core/testing';

import { DummyLoginCheckService } from './dummy-login-check.service';

describe('DummyLoginCheckService', () => {
  let service: DummyLoginCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyLoginCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
