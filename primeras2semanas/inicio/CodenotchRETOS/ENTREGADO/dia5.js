//RETO DE VARIABLES Y TIPOS DE DATOS:
/*
document.write("<p><b>Lorem ipsum dolor sit amet,</b> consectetur adpiscing edit.<br><em>Phasellus mattis vehicula consequat. Proin dapidus nunc quam, nec dictum erat feugiat vitae.</em></p><p><s>Curabitur dignissim nisi a est vulputate tristique.</s><br>Curabitur maximus erat leo, sit amet faciliss est egestas sed.</p><p><b>Morbi aliquam, ipsum eget volutpat blandint, lectus odio condimentum dui, eget dictum quam ipsum sit amet nulla.</b></p>");
*/

/******************************************************************/

//RETO DE CONDICIONALES:
/*
var pais = "Alemania";
var neto = 3000;
var bruto = 0;

if (pais == "España") {
    if (neto >= 2000) {
        bruto = neto + neto*16/100;
    } else if (neto < 2000) {
        bruto = neto + neto*10/100;
    }
} else {
    if (neto >= 2000) {
        bruto = neto + (neto*16/100) + (neto*0.1);
    } else if (neto < 2000) {
        bruto = neto + (neto*10/100) + (neto*0.1);
    }
}
console.log("\nEl importe bruto del producto, cuyo valor neto es " + neto + " y fue comprado en " + pais + ", es: " + bruto + "\n");
*/

/******************************************************************/

// RETO DE BUCLES:
/*
var sumaCuadrados = 0;
var y = 0;

for (var i = 1; i <= 100; i++) {
    y = i;
    sumaCuadrados += y*y;
}

console.log(sumaCuadrados);
*/

/******************************************************************/

// RETO FINAL 1:
/*
var libros = ["Ready player one", "El nombre del viento", "El temor de un hombre sabio", "Cien años de soledad", "Origen"];

for (var i = 0; i < libros.length; i++) {
    var numletras = libros[i].split(" ").join("").length;
    libros[i] = libros[i] + ' [' + numletras + ']';
    if (i == 0) {
        var largo = numletras
        var tituloLargo = "";
        tituloLargo = libros[i];
        var w = i;
    } else if (numletras > largo) {
        largo = numletras;
        tituloLargo = libros[i];
        w = i;
    }
}
document.write(libros[w].bold());
for (var z = 0; z < libros.length; z++) {
    if (z != w) {
        document.write("<br>" + libros[z]);
    }       
}
*/

/******************************************************************/

// RETO final 2:

var matriz1 = Array(10);

for (var i = 0; i < matriz1.length; i++) {
        matriz1[i] = Math.round(Math.random()*50);
}
console.log(matriz1);

var matriz2 = Array(10);

for (var i = 0; i < matriz2.length; i++) {
        matriz2[i] = Math.round(Math.random()*50);
}
console.log(matriz2);

var matrizSum = Array(10);

for (var i = 0; i < matrizSum.length; i++) {
        matrizSum[i] = matriz1[i] + matriz2[i]; ;
}
console.log(matrizSum);

var mult = Math.round(Math.random()*10)
for (var i = 0; i < matriz2.length; i++) {
        matrizSum[i] *= mult;
}
console.log(matrizSum);


