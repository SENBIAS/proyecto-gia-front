import { TestBed } from '@angular/core/testing';

import { UsuarioPacienteService } from './usuario-paciente.service';

describe('UsuarioPacienteService', () => {
  let service: UsuarioPacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioPacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
