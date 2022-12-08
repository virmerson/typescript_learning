"use strict";
class Mail {
    read(doc) {
        throw new Error("Method not implemented.");
    }
    later(email, after) {
        throw new Error("Method not implemented.");
    }
    send(email) {
        throw new Error("Method not implemented.");
    }
    queue(email) {
        throw new Error("Method not implemented.");
    }
    write(doc) {
        throw new Error("Method not implemented.");
    }
}
class Contract {
    register() {
    }
    send(email) {
        //code here
        return true;
    }
    queue(email) {
        //code here
        return true;
    }
}
class CancelContract {
    cancel() {
    }
    send(email) {
        //code here
        return true;
    }
    queue(email) {
        //code here
        return true;
    }
}
class ContactClient {
    later(email, after) {
        throw new Error("Method not implemented.");
    }
    send(email) {
        throw new Error("Method not implemented.");
    }
    queue(email) {
        throw new Error("Method not implemented.");
    }
}
