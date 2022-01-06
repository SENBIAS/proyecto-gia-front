import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadHereditariaComponent } from './enfermedad-hereditaria.component';

describe('EnfermedadHereditariaComponent', () => {
  let component: EnfermedadHereditariaComponent;
  let fixture: ComponentFixture<EnfermedadHereditariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermedadHereditariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermedadHereditariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
