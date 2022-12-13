"use strict";
function merge2(obj1, obj2) {
    console.log(typeof obj1);
    console.log(typeof obj2);
    return Object.assign(Object.assign({}, obj1), obj2);
}
class Pessoa {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
class ClientePF extends Pessoa {
    constructor(name, cpf) {
        super(name); // classe base
        this.name = name;
        this.cpf = cpf;
        this.cpf = cpf;
    }
}
class ClientePJ extends Pessoa {
    constructor(name, cnpj) {
        super(name); // classe base
        this.name = name;
        this.cnpj = cnpj;
        this.cnpj = cnpj;
    }
}
class Veiculo {
    constructor(marca) {
        this.marca = marca;
        this.marca = marca;
    }
}
class Carro extends Veiculo {
}
class Moto extends Veiculo {
}
class Banana {
}
console.log(merge2(new ClientePJ("High Tech Cursos", "10999999"), new Moto("x")));
//console.log( typeof {})
