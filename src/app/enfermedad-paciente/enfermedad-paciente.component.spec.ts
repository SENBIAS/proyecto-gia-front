import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadPacienteComponent } from './enfermedad-paciente.component';

describe('EnfermedadPacienteComponent', () => {
  let component: EnfermedadPacienteComponent;
  let fixture: ComponentFixture<EnfermedadPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermedadPacienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermedadPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
