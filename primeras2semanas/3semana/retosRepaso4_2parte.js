"use strict";
exports.__esModule = true;
var retosRepaso4_1 = require("./retosRepaso4");
var retosRepaso4_3parte_1 = require("./retosRepaso4_3parte");
var punto1 = new retosRepaso4_1.Punto(4, 5);
console.log(punto1.toString());
console.log(punto1.distanciaAlOrigen());
var otroPunto = new retosRepaso4_1.Punto(8, -9);
var punto3 = new retosRepaso4_1.Punto(4, -7);
var puntoActual = new retosRepaso4_1.Punto(2, -3);
console.log(punto1.calcularDistancia(otroPunto));
console.log(punto1.calcularCuadrante());
console.log(otroPunto.calcularCuadrante());
console.log(punto3.calcularCuadrante());
console.log(puntoActual.calcularMasCercano([punto1, otroPunto, punto3]));
var triangulo1 = new retosRepaso4_3parte_1.Triangulo(punto1, punto3, otroPunto);
console.log(triangulo1.calcularLongitudLados());
