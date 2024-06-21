import { TestBed } from '@angular/core/testing';

import { RemediosDescartadosService } from './remedios-descartados.service';

describe('RemediosDescartadosService', () => {
  let service: RemediosDescartadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemediosDescartadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
