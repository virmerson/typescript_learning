"use strict";
function getNetPrice(price, discount, format) {
    let netPrice = price * (1 - discount);
    return format ? `$${netPrice}` : netPrice;
}
let netPrice = getNetPrice(10, 0.05, true);
console.log(netPrice);
let netPrice2 = getNetPrice(10, 0.05, false);
console.log(netPrice2);
let netPrice3 = getNetPrice(10, 0.05, true);
console.log(netPrice3);
let netPrice4 = getNetPrice(10, 0.05, false);
console.log(netPrice4);
