// class Person{

//    protected firstName:string
//    protected lastName:string


//     constructor (firstName:string, lastName:string){
//         this.firstName = firstName
//         this.lastName =lastName
//     }

//     public getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }

//     public getName(){
//         return this.getFullName()
//     }
// }


// class Person{

//      constructor ( protected firstName:string,  protected lastName:string){
//          this.firstName = firstName
//          this.lastName =lastName
//      }
 
//      public getFullName(){
//          return `${this.firstName} ${this.lastName}`
//      }
 
//      public getName(){
//          return this.getFullName()
//      }
//  }


// class Person{

//      constructor ( readonly firstName:string,  readonly lastName:string){
//          this.firstName = firstName
//          this.lastName =lastName
//      }
 
//      public getFullName(){
//          return `${this.firstName} ${this.lastName}`
//      }
 
//      public getName(){
//          return this.getFullName()
//      }


     
//  }


class Person{

    private _firstName:string
    private _lastName:string
 
 
    constructor (firstName:string, lastName:string){
         this._firstName = firstName
         this._lastName =lastName
     }
 
     public getFullName(){
         return `${this._firstName} ${this._lastName}`
     }
 

     public get firstName(){
        return this._firstName
     }

    public set firstName(firstName:string){
        this.firstName = firstName.toUpperCase()
    }

    
 }


let p1 =  new Person('virmerson', 'santos')
p1.firstName = 'virmerson'

console.log(p1.getFullName())


// let p2 =  new Person('Larisce', 'Souza')
// console.log(p2.getFullName())

// let p3 =  new Person('Yasmin', 'Bento')
// console.log(p3.getFullName())