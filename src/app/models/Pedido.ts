import { Usuario } from "./Usuario";

export class Pedido{
    id?: number;
    nomeMedicamento:    string = '';
    dosagem?:           string;
    unidade:            string = '';
    quantidade:         number = 0;
    endereco:           string = '';
    nomeUsuario:        string = '';
    telefone:           string = '';
    data:               string = '';
    dataRetirada:       string = '';
    valorPedido:        number = 0;
    usuarioId:          number = 0;
    statusPedido:       string = '';
    usoContinuo:        string = '';
    usuario:             Usuario = new Usuario();
    
    constructor(){
       
    }
}