import { TestBed } from '@angular/core/testing';

import { ProuctsService } from './proucts.service';

describe('ProuctsService', () => {
  let service: ProuctsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProuctsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
