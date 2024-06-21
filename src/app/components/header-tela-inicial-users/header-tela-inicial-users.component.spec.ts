import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTelaInicialUsersComponent } from './header-tela-inicial-users.component';

describe('HeaderTelaInicialUsersComponent', () => {
  let component: HeaderTelaInicialUsersComponent;
  let fixture: ComponentFixture<HeaderTelaInicialUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderTelaInicialUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderTelaInicialUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
