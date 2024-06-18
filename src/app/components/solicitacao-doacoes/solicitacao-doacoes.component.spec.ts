import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitacaoDoacoesComponent } from './solicitacao-doacoes.component';

describe('SolicitacaoDoacoesComponent', () => {
  let component: SolicitacaoDoacoesComponent;
  let fixture: ComponentFixture<SolicitacaoDoacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoDoacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SolicitacaoDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
