"use strict";
class GroupOfStudends {
    constructor() {
        this.list = []; //member or property
    }
    study() {
        console.log("Studying ....");
    }
}
class Engineering extends GroupOfStudends {
}
class Law extends GroupOfStudends {
}
