"use strict";
function prop(obj, key) {
    return obj[key];
}
let obj1 = { name: 'John' };
console.log(prop(obj1, 'name'));
