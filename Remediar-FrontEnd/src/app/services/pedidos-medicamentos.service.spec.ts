import { TestBed } from '@angular/core/testing';

import { PedidosMedicamentosService } from './pedidos-medicamentos.service';

describe('PedidosMedicamentosService', () => {
  let service: PedidosMedicamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosMedicamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
