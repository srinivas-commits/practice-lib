import { TestBed } from '@angular/core/testing';

import { HostalCallService } from './hostal-call.service';

describe('HostalCallService', () => {
  let service: HostalCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostalCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
