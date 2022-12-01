"use strict";
function getTotal(...numbers) {
    let total = 0;
    numbers.forEach((n) => total += n);
    return total;
}
console.log(getTotal(1, 2, 3));
console.log(getTotal(1, 2, 3, 4, 5, 6));
console.log(getTotal(10, 20, 30));
