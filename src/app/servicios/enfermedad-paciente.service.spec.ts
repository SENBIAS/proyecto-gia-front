import { TestBed } from '@angular/core/testing';

import { EnfermedadPacienteService } from './enfermedad-paciente.service';

describe('EnfermedadPacienteService', () => {
  let service: EnfermedadPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnfermedadPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
