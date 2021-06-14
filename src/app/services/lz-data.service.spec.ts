import { TestBed } from '@angular/core/testing';

import { LZDataService } from './lz-data.service';

describe('LZDataService', () => {
  let service: LZDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LZDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
