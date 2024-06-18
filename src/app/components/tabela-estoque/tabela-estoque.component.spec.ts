import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaEstoqueComponent } from './tabela-estoque.component';

describe('TabelaEstoqueComponent', () => {
  let component: TabelaEstoqueComponent;
  let fixture: ComponentFixture<TabelaEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaEstoqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabelaEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
