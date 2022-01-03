import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPacienteComponent } from './usuario-paciente.component';

describe('UsuarioPacienteComponent', () => {
  let component: UsuarioPacienteComponent;
  let fixture: ComponentFixture<UsuarioPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
