import { Punto } from './retosRepaso4';
import { Triangulo } from './retosRepaso4_3parte';

let punto1: Punto = new Punto(4, 5);

console.log(punto1.toString());

console.log(punto1.distanciaAlOrigen());

let otroPunto: Punto = new Punto(8, -9);
let punto3: Punto = new Punto(4,-7);

let puntoActual: Punto = new Punto(2,-3);

console.log(punto1.calcularDistancia(otroPunto));

console.log(punto1.calcularCuadrante());

console.log(otroPunto.calcularCuadrante());

console.log(punto3.calcularCuadrante());

console.log(puntoActual.calcularMasCercano([punto1, otroPunto, punto3]));

let triangulo1: Triangulo = new Triangulo(punto1, punto3, otroPunto);

console.log(triangulo1.calcularLongitudLados());