import { TestBed } from '@angular/core/testing';

import { EnfermedadHereditariaService } from './enfermedad-hereditaria.service';

describe('EnfermedadHereditariaService', () => {
  let service: EnfermedadHereditariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnfermedadHereditariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
