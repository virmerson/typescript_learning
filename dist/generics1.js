"use strict";
function getRandomAnyElement(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
let numbers = [1, 5, 7, 4, 2, 9];
let colors = ['red', 'green', 'blue'];
let r1 = getRandomAnyElement(numbers);
let r2 = getRandomAnyElement(colors);
console.log(r1);
console.log(r2);
function merge(obj1, obj2) {
    console.log(typeof obj1);
    console.log(typeof obj2);
    return Object.assign(Object.assign({}, obj1), obj2);
}
let result2 = merge({ name: 'John' }, 1);
let result3 = merge({ name: 'John' }, "Banana");
let result4 = merge({ name: 'John' }, { jobTitle: "Web Developer" });
console.log(result2);
console.log(result3);
console.log(result4);
