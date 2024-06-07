import { TipoUsuario } from "./TipoUsuario";

export class Usuario {
    id:             number = 0;
    nome:           string = "";
    cpf:            string = "";
    genero:         string = "";
    numPessoaCasa:  number = 0;
    escolaridade:   string = "";
    faixaEtaria:    string = "";
    rendaFamiliar:  number = 0;
    estado:         string = "";
    regiao:         string = "";
    cep:            string = "";
    rua:            string = "";
    numero:         number = 0;
    bairro:         string = "";
    telefone:       string = "";
    email:          string = "";
    senha:          string = "";
    tipoUsuario?:           TipoUsuario;
    
    constructor(){ 
    }
    
 
}