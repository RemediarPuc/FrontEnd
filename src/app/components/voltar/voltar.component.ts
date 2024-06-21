import { Component } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-voltar',
  standalone: true,
  imports: [],
  templateUrl: './voltar.component.html',
  styleUrl: './voltar.component.css'
})
export class VoltarComponent {

  constructor(private location: Location){}
  goBack(): void {
    this.location.back();
  }
}
