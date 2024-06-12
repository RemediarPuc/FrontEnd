import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosAnualMensalComponent } from './relatorios-anual-mensal.component';

describe('RelatoriosAnualMensalComponent', () => {
  let component: RelatoriosAnualMensalComponent;
  let fixture: ComponentFixture<RelatoriosAnualMensalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatoriosAnualMensalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatoriosAnualMensalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
