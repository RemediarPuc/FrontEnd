import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { Location } from '@angular/common';
import { VoltarComponent } from "../voltar/voltar.component";

@Component({
    selector: 'app-emissao-relatorios',
    standalone: true,
    templateUrl: './emissao-relatorios.component.html',
    styleUrl: './emissao-relatorios.component.css',
    imports: [RouterOutlet, RouterLink, HeaderComponent, VoltarComponent]
})
export class EmissaoRelatoriosComponent {

  constructor(private location: Location) {}

    goBack(): void {
      this.location.back();
    }
}
