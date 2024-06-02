import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmissaoRelatoriosComponent } from './emissao-relatorios.component';

describe('EmissaoRelatoriosComponent', () => {
  let component: EmissaoRelatoriosComponent;
  let fixture: ComponentFixture<EmissaoRelatoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmissaoRelatoriosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmissaoRelatoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
