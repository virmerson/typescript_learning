"use strict";
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
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    getName() {
        return this.getFullName();
    }
}
let p1 = new Person('Virmerson', 'dos Santos');
//p1.firstName='s'
console.log(p1.getFullName());
let p2 = new Person('Larisce', 'Souza');
console.log(p2.getName());
let p3 = new Person('Yasmin', 'Bento');
console.log(p3.getName());
