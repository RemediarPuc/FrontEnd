import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatoriosDeDoadorComponent } from './relatorios-de-doador.component';

describe('RelatoriosDeDoadorComponent', () => {
  let component: RelatoriosDeDoadorComponent;
  let fixture: ComponentFixture<RelatoriosDeDoadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatoriosDeDoadorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RelatoriosDeDoadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
