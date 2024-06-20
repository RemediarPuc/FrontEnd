import { TestBed } from '@angular/core/testing';

import { CadastroMedicamentoService } from './cadastro-medicamento.service';

describe('CadastroMedicamentoService', () => {
  let service: CadastroMedicamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroMedicamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
