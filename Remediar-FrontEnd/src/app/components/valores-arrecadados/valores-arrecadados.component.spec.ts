import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresArrecadadosComponent } from './valores-arrecadados.component';

describe('ValoresArrecadadosComponent', () => {
  let component: ValoresArrecadadosComponent;
  let fixture: ComponentFixture<ValoresArrecadadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoresArrecadadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValoresArrecadadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
