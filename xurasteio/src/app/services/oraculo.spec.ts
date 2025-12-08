import { TestBed } from '@angular/core/testing';

import { Oraculo } from './oraculo';

describe('Oraculo', () => {
  let service: Oraculo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Oraculo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
