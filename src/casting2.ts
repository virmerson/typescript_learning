class Car{
    speedUp(){
        console.log("speeding up")
    }
}

class Fiat extends Car{

}
class HondaCivic extends Car{

}

class TV{
    turnOn(){
        console.log("turning on")
    }
}

//declare a variable Car
let a: Car =  new Car();
//casting with "as"
let b = a as HondaCivic;
//cating with <>
let c = <Fiat>a

//let d = <TV> a

