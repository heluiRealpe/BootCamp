// RETO 1, primera variante:
// punto 1, primera variante
/*
for (var i = 1; i <= 10; i++) {
    console.log(i);
}
*/
// punto 2, primera variante
/*
for (var i = 1; i <= 10; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}
*/
// punto 3, primera variante
/*
for (var i = 1; i <= 10; i++) {
    if (i%2 != 0 && i%3 == 0) {
        console.log(i);
    }
}
*/
// RETO 1, segunda variante:
// punto 1, segunda variante
/*
var i = 1
while (i <= 10) {
    console.log(i);
    i++;
}
*/
// punto 2, segunda variante
/*
var i = 1;
while (i <= 10) {
    if (i%2 == 0) {
        console.log(i);
    }
    i++;
}
*/
// punto 3, segunda variante
/*
var i = 1
while (i <= 10) {
    if (i%2 != 0 && i%3 == 0) {
        console.log(i);
    }
    i++;
}
*/
// RETO 1, tercera variante:
// punto 1, tercera variante
/*
var i = 1
do {
    console.log(i);
    i++;
} while (i <= 10);
*/
// punto 2, tercera variante
/*
var i = 1;
do {
    if (i%2 == 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);
*/
// punto 3, tercera variante
/*
var i = 1
do {
    if (i%2 != 0 && i%3 == 0) {
        console.log(i);
    }
    i++;
} while (i <= 10);
*/

/*******************************************/

//RETO 2
/*
var personas = [ 
        persona1 = {
            "nombre": "nombre1",
            "apellido": "apellido1",
            "anyoNacimiento": 1982,
            "dni": {
                "anyoExpedicion": 2015,
                "lugarNacimiento": "LugarNac1",
                "colorPelo": "cataño"
            }
        },
        persona2 = {
            "nombre": "nombre2",
            "apellido": "apellido2",
            "anyoNacimiento": 2001,
            "dni": {
                "anyoExpedicion": 2010,
                "lugarNacimiento": "LugarNac2",
                "colorPelo": "rubio"
            }
        },
        persona2 = {
            "nombre": "nombre3",
        "apellido": "apellido3",
        "anyoNacimiento": 1989,
        "dni": {
            "anyoExpedicion": 2011,
            "lugarNacimiento": "LugarNac3",
            "colorPelo": "negro"
            }
        },
        persona4 = {
            "nombre": "nombre4",
            "apellido": "apellido4",
            "anyoNacimiento": 2003,
            "dni": {
                "anyoExpedicion": 2018,
                "lugarNacimiento": "LugarNac4",
                "colorPelo": "cataño"
            }
        }
]
*/
// primer punto, con el bucle for:
/*
for (var i = 0; i <personas.length; i++) {
    console.log("La " + (i+1) + " persona es: ");
    console.log(personas[i]);
    }
*/
// primer punto, con el bucle while:
/*
var i = 0;
while ( i <personas.length) {
    console.log("La " + (i+1) + " persona es: ");
    console.log(personas[i]);
    i++;
    }
*/
// segundo punto, con el bucle for:
/*
for (var i = 0; i < personas.length; i++) {
    
    if (personas[i].anyoNacimiento > 1978 && personas[i].anyoNacimiento < 2000) {
        console.log("El año de nacimiento de la persona a continuación se encuentra entre el año 1978 y 2000: ");
        console.log(personas[i]);
    }
}
*/
// segundo punto, con el bucle while:
/*
var i = 0;
while (i < personas.length) {
    if (personas[i].anyoNacimiento > 1978 && personas[i].anyoNacimiento < 2000) {
        console.log("El año de nacimiento de la persona a continuación se encuentra entre el año 1978 y 2000: ");
        console.log(personas[i]);
    }
    i++;
}
*/
// tercer punto:
/*
for (var i = 0; i < personas.length; i++) {
    
    if (personas[i].anyoNacimiento > 1978 && personas[i].anyoNacimiento < 2000) {
        console.log("\nTu edad está entre 40 y 20 años: ");
        console.log(personas[i]);
    } else {
        console.log("\nTu edad es menor de 20:");
        console.log(personas[i]);
    }
}
*/
// cuarto punto (jugar al play):
/*
for (var i = 0; i < personas.length; i++) {
    personas[i].aficion = "jugar al play";
}
console.log(personas);
*/
/*
for (var i = 0; i < personas.length; i++) {
    personas[i].aficion = [];
    personas[i].aficion.push("jugar al play");
}
console.log(personas);
 */
/*******************************************/

// RETO 3
// primer punto, factorial con for:
/*
var num = 6;
var factorial = 1;

for (var i = 1; i <= num; i++) {
    factorial = i * factorial;
}
console.log(factorial);
*/
// primer punto, factorial con while:
/*
var num = 6;
var factorial = 1;
var i = 1;
while (i <= num) {
    factorial = i * factorial; 
    i++;
}
console.log(factorial);
*/
// segundo punto:
/*
var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
var i = 0;
while (i < array.length) {
    if (array[i]%2 == 0) {
        console.log("El siguiente número del array es múltiplo de dos: " + array[i]);
    }
    i++;
}
*/
// tercer punto:
/*
var suma = 0;
for (var i = 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);
*/

// cuarto punto:
/*
var array = ['Marcos', 'Carlos', 'Pepe', 'Hector', 'Luis', 'Rodrigo']
var i = 0;
while (i < array.length) {
    if (array[i] == "Pepe") {
        console.log("El indice de la primera ocurrencia del nombre Pepe es: " + (i+1));
        i += array.length;
    }
    i++;
}
*/
// quinto punto y sexto punto:
/*
var array1 = [];
var array2 = [];

for (var i = 0; i < 100; i++) {
    array1[i] = Math.round(Math.random()*20);
    array2[i] = Math.round(Math.random()*20);
}
console.log("El primer vector de 100 números aleatorios entre 0 y 20 es: ");
console.log(array1);
console.log("\nEl segundo vector de 100 números aleatorios entre 0 y 20 es: ");
console.log(array2);

var array3= [];
for(var i=0; i< 100; i++) {
    array3[i] = array1[i] + array2[i];
}
console.log("\nLa suma de los dos vectores anteriorres es: ");
console.log(array3);
*/

/*******************************************/

//RETO 4:
/*
var persona1 = {
    "nombre": "Héctor",
    "apellido": "Realpe",
    "anyoNacimiento": new Date(1982,9,28),
    "aficiones": ["programacion", "bicicleta", "bicipolo"],
    "dni": {"anyoExpedicion": new Date(2014,1,1), "lugarNacimiento": "Maracay/Venezuela"},
    "colorPelo": "castaño",
};

var persona2 = {
    "nombre": "Nombre2",
    "apellido": "Apellido2",
    "anyoNacimiento": new Date(1991,9,28),
    "aficiones": ["comer", "dormir", "correr"],
    "dni": {"anyoExpedicion": new Date(2010,1,1), "lugarNacimiento": "Pamplona"},
    "colorPelo": "negro",
};

var persona3 = {
    "nombre": "Nombre3",
    "apellido": "Apellido3",
    "anyoNacimiento": new Date(2009,9,28),
    "aficiones": ["correr", "gimnasio", "dormir"],
    "dni": {"anyoExpedicion": new Date(2010,1,1), "lugarNacimiento": "Calahorra"},
    "colorPelo": "castaño",
};

var persona4 = {
    "nombre": "Nombre4",
    "apellido": "Apellido4",
    "anyoNacimiento": new Date(1986,9,28),
    "aficiones": ["comer", "bicicleta", "bicipolo"],
    "dni": {"anyoExpedicion": new Date(2010,1,1), "lugarNacimiento": "Madrid"},
    "colorPelo": "negro",
};
var personas = [persona1, persona2, persona3]

/*
console.log("A continuación los nombres de las personas con el pelo color castaño: ");

for (var i = 0; i < personas.length; i++) {
    if (personas[i].colorPelo == "castaño"){
        console.log(personas[i].nombre);
    }
}
*/
/*
console.log("A continuación la edad de todos los que son mayores de 30: ");
for (var i = 0; i < personas.length; i++) {
    if (((2021 - personas[i].anyoNacimiento.getFullYear()) > 30 )) {
    var edad = 2021 - personas[i].anyoNacimiento.getFullYear();
    console.log(personas[i].nombre + " y tiene " + edad + " años.");
    }
}
*/
/*
console.log("A continación el lugar de nacimiento de todos aquellos que tienen el pelo negro y el dni caducado, o son menores de edad y su afición es comer o dormir: ");

for (var i = 0; i < personas.length; i++) {
    if (((personas[i].colorPelo == "negro") && ((2021 - personas[i].dni.anyoExpedicion.getFullYear()) > 10)) || (((2021 - personas[i].anyoNacimiento.getFullYear() < 18)) && ((personas[i].aficiones.indexOf("comer") >= 0) || (personas[i].aficiones.indexOf("dormir") >= 0)))) {
        console.log(personas[i].dni.lugarNacimiento);;
    }
}*/


