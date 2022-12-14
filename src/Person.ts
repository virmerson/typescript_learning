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
        this._firstName = firstName.toUpperCase()
    }
    
 }



//  class Employee extends Person{

//     private _jobTitle:string;
//     private static headcount:number = 0; 

//     constructor (firstName:string, lastName:string, jobTitle:string){
//         super (firstName, lastName)
//         this._jobTitle= jobTitle
//         Employee.headcount++
//     }

//     public get jobTitle(){
//         return this._jobTitle
//     }
//     public static getHeadcount(){
//         return Employee.headcount
//     }
//  }

// let p1 =  new Person('virmerson', 'santos')
// p1.firstName = 'virmerson'
// console.log(p1.firstName)

// console.log(Employee.getHeadcount())

// let p2 = new Employee('J??o','Silva', 'Web Developer')
// console.log(p2.getFullName())
// console.log(p2.jobTitle)
// console.log(Employee.getHeadcount())

// let p3 = new Employee('Z??','Silva', 'Designer')
// console.log(Employee.getHeadcount())


//console.log(p1.getFullName())


// let p2 =  new Person('Larisce', 'Souza')
// console.log(p2.getFullName())

// let p3 =  new Person('Yasmin', 'Bento')
// console.log(p3.getFullName())




 abstract class Employee extends Person{
   
    private _jobTitle:string;
    private static headcount:number = 0; 

    constructor (firstName:string, lastName:string, jobTitle:string){
        super (firstName, lastName)
        this._jobTitle= jobTitle
        Employee.headcount++
    }
    abstract getSalary():number //method signature 

    public get jobTitle(){
        return this._jobTitle
    }
    public static getHeadcount(){
        return Employee.headcount
    }

    public compansationStatement(){
        return `${this.getFullName()} makes ${this.getSalary()} a month `
    }
 }

 class WebDeveloper extends Employee{
     getSalary() {
        return 5000;
     }
 }

 class Professor extends Employee{
    getSalary() {
       return 1000;
    }
}


let emp1 = new WebDeveloper("Maria", "silva", "Web Dev")
console.log(emp1.compansationStatement())

let emp2 = new Professor("Virmerson", "Santos", "Professor")
console.log(emp2.compansationStatement())

//let emp3 = new Employee('a','b','c')



