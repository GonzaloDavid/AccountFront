import { TestBed } from '@angular/core/testing';

import { LoadfileService } from './loadfile.service';

describe('LoadfileService', () => {
  let service: LoadfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
