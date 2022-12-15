"use strict";
class List {
    constructor() {
        this.items = [];
    }
    add(o) {
        this.items.push(o);
    }
    remove(o) {
        let index = this.items.indexOf(o);
        if (index != -1) {
            this.items.splice(index, 1);
        }
    }
    getItems() {
        return this.items;
    }
}
let list = new List();
for (let i = 0; i < 10; i++) {
    list.add(i);
}
console.log(list.getItems());
list.remove(3);
console.log(list.getItems());
