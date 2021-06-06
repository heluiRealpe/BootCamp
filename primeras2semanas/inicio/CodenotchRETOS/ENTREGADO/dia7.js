const { Vector } = require("./dia7opcionales");

class Persona {
    constructor (nombre, apellidos, anyoNacimiento, sexo, edad, dni, altura, peso, colorPelo, aficiones, nacionalidad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.anyoNacimiento = anyoNacimiento;
        this.sexo = sexo;
        this.edad = edad;
        this.dni = dni;
        this.altura = altura;
        this.peso = peso;
        this.colorPelo = colorPelo;
        this.aficiones = aficiones;
        this.nacionalidad = nacionalidad;
    }

    calcularIMC (peso1, altura1) {
        var IMC = (this.peso/(this.altura*this.altura));
        return IMC;
    }

    metodoEdad (anyoNacimiento) {
        var today = new Date();
        var anyoActual = today.getFullYear();
        var tuEdad = anyoActual - this.anyoNacimiento;
        return tuEdad;
    }

    mostrarTodos () {
        console.log("Nombre - " + this.nombre);
        console.log("Apellidos - " + this.apellidos);
        console.log("Año de Nacimiento - " + this.anyoNacimiento);
        console.log("sexo - " + this.sexo);
        console.log("edad - " + this.edad);
        console.log("Dni - " + this.dni);
        console.log("Altura - " + this.altura);
        console.log("Peso - " + this.peso);
        console.log("Color de Pelo - " + this.colorPelo);
        console.log("Aficiones - " + this.aficiones);
        console.log("Nacionalidad - " + this.nacionalidad); 
    }

    mostrarAficiones() {
        return console.log(this.aficiones);
    }
}

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

const persona1 = new Persona("Héctor", "Realpe", 1982, "masculino", 38, "Y0457595-R", 1.77, 94, "castaño", ["programación", "bicicleta"], "colombiana");

// RETO 2:
console.log("\nEl IMC de " + persona1.nombre + " es: " + persona1.calcularIMC())

// // RETO 3:

console.log("\nmetodoEdad(): ");
console.log(persona1.metodoEdad());

// RETO 4:

console.log("\nMétodo mostrarTodos():")
console.log(persona1.mostrarTodos());

// RETO 5:
console.log("\nSus aficiones son: ")
console.log(persona1.mostrarAficiones());

// RETO 7:

const persona2 = new Persona("Héctor", "Realpe", 1982, "masculino", 38, "Y0457595-R", 1.77, 94, "castaño", ["programación", "bicicleta"], "colombiana");
const persona3 = new Persona("Nombre2", "Apellido2", 1982, "masculino", 38, "xxxxxxxxx", 1.77, 94, "castaño", ["programación", "bicicleta"], "colombiana");
const persona4 = new Persona("Nombre3", "Apellido3", 1982, "femenino", 38, "xxxxxxxxx", 1.77, 94, "castaño", ["programación", "bicicleta"], "colombiana");


console.log("\nClase Agenda, array de objetos clase Persona:")

const agenda1 = new Agenda([persona1, persona2, persona3, persona4]);

console.log(agenda1.printPersonas());