import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoDoacoesComponent } from './historico-doacoes.component';

describe('HistoricoDoacoesComponent', () => {
  let component: HistoricoDoacoesComponent;
  let fixture: ComponentFixture<HistoricoDoacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoricoDoacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoricoDoacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
