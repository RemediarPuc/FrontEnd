import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeDoadorComponent } from './cadastro-de-doador.component';

describe('CadastroDeDoadorComponent', () => {
  let component: CadastroDeDoadorComponent;
  let fixture: ComponentFixture<CadastroDeDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDeDoadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadastroDeDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
