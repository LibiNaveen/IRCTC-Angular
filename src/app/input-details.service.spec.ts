import { TestBed } from '@angular/core/testing';

import { InputDetailsService } from './input-details.service';

describe('InputDetailsService', () => {
  let service: InputDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
