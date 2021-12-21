import { TestBed } from '@angular/core/testing';

import { UsuarioMedicoService } from './usuario-medico.service';

describe('UsuarioMedicoService', () => {
  let service: UsuarioMedicoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuarioMedicoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
