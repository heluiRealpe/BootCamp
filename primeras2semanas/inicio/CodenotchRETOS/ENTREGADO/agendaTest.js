var myLib = require('./agenda');

var myLibreria = require('./persona');

const persona1 = new myLibreria.Persona("Héctor", "Realpe", 1982, "masculino", 38, "Y0457595-R", 1.77, 94, "castaño", ["programación", "bicicleta"], "colombiana");
const persona2 = new myLibreria.Persona("Héctor", "Realpe", 1982, "masculino", 38, "Y0457595-R", 1.77, 94, "castaño", ["programación", "bicicleta"], "colombiana");
const persona3 = new myLibreria.Persona("Nombre2", "Apellido2", 1982, "masculino", 38, "xxxxxxxxx", 1.77, 94, "castaño", ["programación", "bicicleta"], "colombiana");
const persona4 = new myLibreria.Persona("Nombre3", "Apellido3", 1982, "femenino", 38, "xxxxxxxxx", 1.77, 94, "castaño", ["programación", "bicicleta"], "colombiana");

const agenda1 = new myLib.Agenda([persona1, persona2, persona3, persona4])

console.log(agenda1.printPersonas());