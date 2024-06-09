import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-doacao-de-medicamento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './doacao-de-medicamento.component.html',
  styleUrls: ['./doacao-de-medicamento.component.css']
})
export class DoacaoDeMedicamentoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
