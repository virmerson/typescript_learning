"use strict";
function applyDiscount(price, discount = 0.05) {
    return price * (1 - discount);
}
console.log(applyDiscount(100));
console.log(applyDiscount(100, 0.10));
