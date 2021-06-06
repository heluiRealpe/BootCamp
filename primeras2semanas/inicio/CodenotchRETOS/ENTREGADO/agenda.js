var myLib = require('./persona');

class Agenda {
    constructor(contacto1) {
        this.contacto1 = contacto1;
    }

    printPersonas() {
        for (var i = 0; i < this.contacto1.length; i++) {
            console.log(this.contacto1[i]);
        }
    }
}

module.exports = {Agenda};