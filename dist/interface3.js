"use strict";
class Client {
    constructor(name, cpf) {
        this.name = name;
        this.cpf = cpf;
        this.name = name;
        this.cpf = cpf;
    }
    toJSON() {
        return JSON.stringify({ name: this.name, cpf: this.cpf });
    }
}
class Supplier {
    constructor(name, cnpj) {
        this.name = name;
        this.cnpj = cnpj;
        this.name = name;
        this.cnpj = cnpj;
    }
    toJSON() {
        return JSON.stringify({ name: this.name, cnpj: this.cnpj });
    }
}
let c1 = new Client("Jão", "999.000.888-00");
console.log(c1.toJSON());
let fornec1 = new Supplier("Empresa x", "10.797.626/0001-24");
console.log(fornec1.toJSON());
