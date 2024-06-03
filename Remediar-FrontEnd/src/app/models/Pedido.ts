export class Pedido{
    id?: number;
    nomeMedicamento:    string = '';
    dosagem?:           number;
    unidade:            string = '';
    quantidade:         number = 0;
    endereco:           string = '';
    nomeUsuario:        string = '';
    telefone:           string = '';
    data:               string = '';
    dataRetirada:       string = '';
    status:             string = '';
    valorPedido:        number = 0;
    usuarioId:          number = 0;
    statusPedido:       string = '';
    usoContinuo:        boolean = true;
    
    constructor(){
       
    }
}