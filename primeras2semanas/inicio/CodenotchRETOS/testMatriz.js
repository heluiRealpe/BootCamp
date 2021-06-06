var myLib = require('./dia7opcionales2parte');

var n = 4;
var m = 5;
var k = 20;

console.log("n = " + n);
console.log("m = " + m);
console.log("k = " + k);

var matriz1 = new myLib.Matriz(n,m,k);

console.log(matriz1);

console.log("\nextraer(): ")
console.log(matriz1.extraer());

var matriz2 = new myLib.Matriz(n,m,k);
console.log("matriz2: ");
console.log(matriz2);

console.log("\nsuma(matriz2): ")
console.log(matriz1.suma(matriz2));

console.log("\nproductoNum(n): ")
console.log(matriz1.productoNum(n));

console.log("\nresta(matriz2): ")
console.log(matriz1.resta(matriz2));

console.log("\nproducto(matriz2): ")
console.log(matriz1.producto(matriz2));



