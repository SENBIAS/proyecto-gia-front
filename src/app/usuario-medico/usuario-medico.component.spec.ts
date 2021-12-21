import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioMedicoComponent } from './usuario-medico.component';

describe('UsuarioMedicoComponent', () => {
  let component: UsuarioMedicoComponent;
  let fixture: ComponentFixture<UsuarioMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioMedicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
