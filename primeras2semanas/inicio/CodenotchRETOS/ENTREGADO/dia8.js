// RETO 1:

imprimir = (param) => {
    if(param!=undefined) {
        console.log(param);
    } else {
        console.log("no se ha pasado ningún parámetro");
    }
};

imprimir("hola");
imprimir();

// RETO 2:

multiply = (x,y) => {return x*y};
console.log(multiply(4,5));

// RETO 3:

let suma = 0;
let vector = undefined;

sumArray = (vector) => {if(vector != undefined){if(Array.isArray(vector)){for(let i of vector){suma+=i}return suma}else console.log("No has introducido un array como parámetro de entrada")}else return 0};

console.log(sumArray(vector));


// RETO 4:

// function ascii_cipher(texto) {
//     var newText = [];
//     for (var i in texto) {
//         newText.push(texto.charCodeAt(i));
//     }
//     return newText.join(' ');
// }

ascii_cipher = (texto) => {let newText = []; for (var i in texto) { newText.push(texto.charCodeAt(i));} return newText.join(' ');};


console.log(ascii_cipher("Codenotch and Javascript are awesome!"));