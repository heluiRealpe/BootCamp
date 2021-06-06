"use strict";
exports.__esModule = true;
var person_1 = require("./person");
var persona1 = new person_1.Person("Héctor", 38, "vacio");
persona1.printName();
console.log(persona1.yearOfBirth(38));
persona1.setAddress("Calle Canarias 57, 2 Derecha, 28045, Madrid.");
console.log(persona1.getAddres());
