import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-historico-doadores',
    standalone: true,
    templateUrl: './historico-doadores.component.html',
    styleUrls: ['./historico-doadores.component.css'],
    imports: [HeaderComponent, FooterComponent]
})
export class HistoricoDoadoresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
