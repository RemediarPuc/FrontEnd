import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
    selector: 'app-historico-doadores',
    standalone: true,
    templateUrl: './historico-doadores.component.html',
    styleUrls: ['./historico-doadores.component.css'],
    imports: [HeaderComponent]
})
export class HistoricoDoadoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
