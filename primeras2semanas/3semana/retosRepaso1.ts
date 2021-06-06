// RETO 1:

// function signoZodiacal(fecha) {
//     let dia = fecha.getDate();
//     let mes = fecha.getMonth();

//     if (mes == 1) {
//         if (dia < 21) {
//             return "Capricornio";
//         } else {
//             return "Acuario";
//         }        
//     } else if (mes == 2) {
//         if (dia < 19) {
//             return "Acuario";
//         } else {
//             return "Picis";
//         }
//     } else if (mes == 3) {
//         if (dia < 21) {
//             return "Picis";
//         } else {
//             return "Aries";
//         }
//     } else if (mes == 4) {
//         if (dia < 22) {
//             return "Aries";
//         } else {
//             return "Tauro";
//         }
//     } else if (mes == 5) {
//         if (dia < 22) {
//             return "Tauro";
//         } else {
//             return "Géminis";
//         }
//     } else if ( mes == 6) {
//         if (dia < 23) {
//             return "Géminis";
//         } else {
//             return "Cáncer"
//         }
//     } else if ( mes == 7) {
//         if (dia < 23) {
//             return "Cáncer";
//         } else {
//             return "Leo";
//         }
//     } else if ( mes == 8) {
//         if (dia < 24) {
//             return "Leo";
//         } else {
//             return "Virgo";
//         }
//     } else if (mes == 9) {
//         if (dia < 25) {
//             return "Virgo";
//         } else {
//             return "Libra";
//         }
//     } else if (mes == 10) {
//         if (dia < 24) {
//             return "Libra";
//         } else {
//             return "Escorpio";
//         }
//     } else if (mes == 11) {
//         if (dia < 23) {
//             return "Escorpio";
//         } else {
//             return "Sagitario"
//         }
//     } else {
//         if (dia < 23) {
//             return "Sagitario";
//         } else {
//             return "Capricornio";
//         }
//     }
// }

// const fecha = new Date(1982,9,28);

// console.log(signoZodiacal(fecha));

// RETO 2:

// function continentePais(pais) {
//     if (pais == "España" || pais == "Alemania" || pais == "Francia" || pais == "Inglaterra" || pais == "Suiza") {
//         console.log("Estas en Europa");
//     } else if (pais == "Venezuela" || pais == "Colombia" || pais == "Ecuador" || pais == "Chile" || pais == "Brazil") {
//         console.log("Estas en Sur Amércia")
//     } else if (pais == "Estados Unidos" || pais == "Canada" || pais == "México") {
//         console.log("Estas en Norte América")
//     } else if (pais == "Costa Rica" || pais == "Guatemala" || pais == "Honduras" || pais == "Nicaragua" || pais == "Panama") {
//         console.log("Estas en Centro Amércia")
//     } else if (pais == "Angola" || pais == "Argelia" || pais == "Benín" || pais == "Camerún" || pais == "Egipto") {
//         console.log("Estas en Africa")
//     } else if (pais == "Australia" || pais == "Nueva Guinea" || pais == "Nueva Zelanda") {
//         console.log("Estas en Oceanía")
//     } else if (pais == "Tokio" || pais == "Seúl" || pais == "Bombay" || pais == "Nueva Delhi" || pais == "Dubái") {
//         console.log("Estas en Sur Asia")
//     }
// }

// continentePais("España");
// continentePais("Venezuela");
// continentePais("Tokio");

// RETO 3:

// function numImpares(num) {
//     for (let i = 1; i < num; i++) {
//         if (i % 2 != 0) {
//             console.log(i);
//         }
//     }
// }

// numImpares(100);

// RETO 4:

// function revertido(array) {
//     let rever = Array(array.length);
//     for (let i = 0, j = array.length-1; i < array.length; i++) {
//         rever[i] = array[j--];
//     }
//     return rever;
// }

// console.log(revertido([1,2,3,4,5,6,7,8,9,10]));

// RETO 5:

// function enArcoiris(colores) {
//     for (let i = 0; i < colores.length; i++) {
//         if (colores[i] == "rojo"|| colores[i] == "naranja" || colores[i] == "amarillo" || colores[i] == "verde" || colores[i] == "cian" || colores[i] == "azul" || colores[i] == "violeta") {
//             console.log(`El color ${colores[i]} está en el arcoiris`);
//         }
//     }
// }

// enArcoiris(["rojo", "verde", "negro", "amarillo", "cian", "fuccia", "violeta"]);

// RETO 6:

// function numPar(array) {
//     for (var i = 0; i < array.length; i++) {
//         if (array[i] % 2 == 0) {
//             console.log("Existe un número par en el array de números.");
//             i = array.length;
//         }
//     }
// }

// numPar([1,3,5,7,8,9,11,14,16]);

// RETO 7:

// function letraM(array) {
//     for (var i = 0, k = 0; i < array.length; i++) {
//         if (array[i][0] == "M") {
//             k++;
//         }
//     }
//     if (k == array.length) {
//         return "Todos los nombres comienzan por la letra M.";
//     } else {
//         return "No todos los nombres comienzan por la letra M.";
//     }
// }

// console.log(letraM(["Marcos", "Martin", "Méctor"]));

// RETO 8:

function sumaChar(array) {
    let char = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            char++;
        }
    }
    return char;
}

// console.log(sumaChar(["Héctor", "Joaquin", "Rodrigo", "Alberto"]));

// RETO 9:

function queEs(num) {
    if (num % 2 == 0) {
        console.log("El número es par.");
    } else {
        console.log("El número es impar.");
    }
}

// queEs(35);
// queEs(40);

// RETO 10:

// let array1 = ["Casa", "Coche", "Ciudad", "Cesta"];
// let array2 = ["Barco", "Baca", "Bicicleta", "Balon", "Bisiesto", "Brasil"];
// let array3 = ["Venezuela", "Veneno", "Voltaje"];

// queEs(sumaChar(array1));
// queEs(sumaChar(array2));
// queEs(sumaChar(array3));

// RETO 11:


