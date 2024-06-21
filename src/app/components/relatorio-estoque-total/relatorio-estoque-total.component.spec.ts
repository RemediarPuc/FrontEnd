import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioEstoqueTotalComponent } from './relatorio-estoque-total.component';

describe('RelatorioEstoqueTotalComponent', () => {
  let component: RelatorioEstoqueTotalComponent;
  let fixture: ComponentFixture<RelatorioEstoqueTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatorioEstoqueTotalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatorioEstoqueTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
