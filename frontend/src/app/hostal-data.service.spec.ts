import { TestBed } from '@angular/core/testing';

import { HostalDataService } from './hostal-data.service';

describe('HostalDataService', () => {
  let service: HostalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
