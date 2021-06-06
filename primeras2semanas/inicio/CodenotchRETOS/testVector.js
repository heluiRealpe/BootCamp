var myLib = require('./dia7opcionales');

var n = 4;
var m = 10;

console.log("n = " + n);
console.log("m = " + m);

const array1 = new myLib.Vector(n,m);

console.log(array1);
console.log(array1.extraer());

var a = [1,2,3,4];
console.log("\na = " + "[" + a + "]");
console.log("suma(a):");
console.log(array1.suma(a));

console.log("\nproductoNum(n): ");
console.log(array1.productoNum(n));

console.log("\nresta(a): ");
console.log(array1.resta(a));

console.log("\nproducto(a): ");
console.log(array1.producto(a));

module.exports = {array1};