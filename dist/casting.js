"use strict";
// let input = document.querySelector("input[type='text']")
// console.log(input)
class Device {
    turnOn() {
        console.log('Turning on ');
    }
    turnOff() {
        console.log('Turning off');
    }
}
//Phone is a Device
class Phone extends Device {
    callNumber(number) {
        console.log(`Calling the number ${number}`);
    }
}
let d1 = new Device();
d1.turnOn();
d1.turnOff();
d1.callNumber(9090);
let phone1 = new Phone();
phone1.callNumber(67992612121);
