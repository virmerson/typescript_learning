"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cpfValidator_1 = require("./cpfValidator");
class Cadastro {
    cadastrarCliente(nome, cpf) {
        let validator = new cpfValidator_1.CPFValidator();
        if (validator.isValid(cpf))
            console.log("Cadastrado com Sucesso");
        else
            throw new Error("Não foi possivel cadastrar!");
    }
}
let cad = new Cadastro();
cad.cadastrarCliente("Virmerson", "");
