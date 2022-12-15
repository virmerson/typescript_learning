import {CPFValidator} from './cpfValidator'

class Cadastro{

    cadastrarCliente(nome:string, cpf:string){
        let validator = new CPFValidator()
        if ( validator.isValid(cpf)) 
         console.log("Cadastrado com Sucesso")
         else 
         throw new Error("Não foi possivel cadastrar!")

    }
}

let cad = new Cadastro()

cad.cadastrarCliente("Virmerson","")

