var myLibreria = require('./matriz');

var n = 3;
var m = 4;
var k = 20;

console.log("n = " + n + "\nm = " + m + "\nk = " + k);

console.log("crearMatriz(n, m, k) = m1:")
var m1 = myLibreria.crearMatriz(n,m,k);
console.log(m1);

console.log("crearMatriz(n, m, k) = m2:")
var m2 = myLibreria.crearMatriz(n,m,k);
console.log(m2);

console.log("sumaMatriz(m1, m2): ");
console.log(myLibreria.sumaMatriz(m1, m2));

console.log("productoNumMatriz(n, m1): ");
console.log(myLibreria.productoNumMatriz(n,m1));

console.log("restaMatriz(m1,m2): ");
console.log(myLibreria.restaMatriz(m1,m2));

console.log("productoMatriz(m1, m2): ");
console.log(myLibreria.productoMatriz(m1, m2));