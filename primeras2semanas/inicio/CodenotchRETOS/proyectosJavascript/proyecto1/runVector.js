var myLib = require('./vector');

var n = 4;
var m = 5;

var v1 = myLib.crearVector(n,m);
var v2 = myLib.crearVector(n,m);

console.log("n = " + n + "\nm = " + m);

console.log("\nv1 = [" + v1 + "]");
console.log("v2 = [" + v2 + "]\n");

console.log("sumaVector(v1,v2):");
console.log(myLib.sumaVector(v1,v2));

console.log("productoNumVector(n,v1):");
console.log(myLib.productoNumVector(n,v1));

console.log("restaVector(v1,v2)");
console.log(myLib.restaVector(v1, v2));

console.log("productoVector(v1,v2):");
console.log(myLib.productoVector(v1,v2));


