"use strict";
//annotating the variable with the type StringFormat
let format;
//implementing the funcion
format = function (str, isUpper) {
    return isUpper ? str.toUpperCase() : str.toLowerCase();
};
let lowerCase;
lowerCase = function (str) {
    return str.toLowerCase();
};
console.log(lowerCase('VIRMERSON', false));
console.log(format('virmerson', true));
