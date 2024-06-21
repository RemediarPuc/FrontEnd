import { Usuario } from "./Usuario";

export class Doacao {
    id: number = 0;
    nomeMedicamento: string='';
    qtdCaixas: number = 0;
    qtdMg: number = 0;
    dtValidade: Date = new Date();
    dtRetirada : Date = new Date();
    valorDoacao : number = 0;
    statusDoacao: string = '';
    usuarioId: number = 0;
    usuario: Usuario = new Usuario();
     
}