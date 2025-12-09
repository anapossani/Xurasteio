import { TestBed } from '@angular/core/testing';

import { OraculoService } from './oraculo';


describe('Oraculo', () => {
  let service: OraculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OraculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
