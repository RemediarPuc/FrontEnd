import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemediosDescartadosComponent } from './remedios-descartados.component';

describe('RemediosDescartadosComponent', () => {
  let component: RemediosDescartadosComponent;
  let fixture: ComponentFixture<RemediosDescartadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemediosDescartadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemediosDescartadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
