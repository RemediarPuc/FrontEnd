import { Component } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { LocalStorageService } from '../../services/local-storage-service.service';


@Component({
  selector: 'app-header-tela-inicial-users',
  standalone: true,
  imports: [],
  templateUrl: './header-tela-inicial-users.component.html',
  styleUrl: './header-tela-inicial-users.component.css'
})
export class HeaderTelaInicialUsersComponent {

  constructor(private router: Router, private localStorageService: LocalStorageService){}
  logOut(){
    Swal.fire({
      title: "Tem certeza que deseja sair?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Confirmar"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("Usuario");
        this.router.navigate(['']);
      }
    });
  }
}
