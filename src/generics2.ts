

function merge2<U extends Pessoa, V extends Veiculo>(obj1: U, obj2: V) {
    console.log(typeof obj1)
    console.log(typeof obj2)
    return {
        ...obj1,
        ...obj2
    };
}

class Pessoa{
    constructor(protected name:string){
        this.name= name
    }
}

class ClientePF extends Pessoa {
    constructor(protected name:string, protected cpf:string){
        super (name) // classe base
        this.cpf = cpf;
    }
}

class ClientePJ extends Pessoa {
    constructor(protected name:string, protected cnpj:string){
        super (name) // classe base
        this.cnpj = cnpj;
    }
}

class Veiculo{

    constructor(protected marca:string){
        this.marca= marca
    }
}

class Carro extends Veiculo{

}

class Moto extends Veiculo{ 

}

class Banana{

}
console.log(merge2(  new ClientePJ("High Tech Cursos", "10999999") , new Moto("x")));
//console.log( typeof {})


