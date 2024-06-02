import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;
  sucessLogin:boolean = true;

  constructor(private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void{
    this.loginForm = this.formBuilder.group({
      senha: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  submit(){
    if(this.loginForm.valid){
      const {value} = this.loginForm;
    }else{
      return;
    }
  }

}
