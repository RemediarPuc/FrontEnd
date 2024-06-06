import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cadastro-de-doador',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterOutlet, RouterLink],
  templateUrl: './cadastro-de-doador.component.html',
  styleUrl: './cadastro-de-doador.component.css'
})
export class CadastroDeDoadorComponent {

  constructor(private formBuilder: FormBuilder, private router: Router){}

  goBack(): void {
    this.router.navigate(['/']); 
  }

}
