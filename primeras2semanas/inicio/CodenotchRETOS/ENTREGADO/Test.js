var myLib = require('./persona');

const persona1 = new myLib.Persona("Héctor", "Realpe", 1982, "masculino", 38, "Y0457595-R", 1.77, 94, "castaño", ["programación", "bicicleta"], "colombiana");

console.log("El IMC de " + persona1.nombre + " es: " + persona1.calcularIMC())

console.log(persona1.metodoEdad());

console.log(Object.keys(persona1));

console.log(persona1.mostrarTodos());

console.log(persona1);


