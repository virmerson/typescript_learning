"use strict";
class Car {
    speedUp() {
        console.log("speeding up");
    }
}
class Fiat extends Car {
}
class HondaCivic extends Car {
}
class TV {
    turnOn() {
        console.log("turning on");
    }
}
//declare a variable Car
let a = new Car();
//casting with "as"
let b = a;
//cating with <>
let c = a;
//let d = <TV> a
