import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarMedicamentoComponent } from './solicitar-medicamento.component';

describe('SolicitarMedicamentoComponent', () => {
  let component: SolicitarMedicamentoComponent;
  let fixture: ComponentFixture<SolicitarMedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarMedicamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitarMedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
