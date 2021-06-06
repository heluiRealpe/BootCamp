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

module.exports = {Persona};