
interface Json{
    toJSON ():string
}

class Client implements Json{
   
    constructor (private name:string, private cpf?:string){
        this.name = name
        this.cpf=cpf
        
    }

    toJSON(): string {
       return JSON.stringify( {name: this.name, cpf:this.cpf } )
    }

}
class Supplier implements Json {
    constructor (private name:string, private cnpj?:string){
        this.name = name
        this.cnpj =cnpj
    }
    toJSON(): string {
        return JSON.stringify( {name: this.name, cnpj:this.cnpj } )
    }
}


let c1 = new Client("Jão", "999.000.888-00")
console.log(c1.toJSON())

let fornec1 = new Supplier("Empresa x","10.797.626/0001-24")
console.log(fornec1.toJSON())
