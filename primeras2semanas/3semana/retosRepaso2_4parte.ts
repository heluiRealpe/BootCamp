import { Mobile } from './retosRepaso2_3parte';

let Nokia3210: Mobile = new Mobile("Nokia",  "3210", "Nokia Corporation, Finland", "microSD", "azul/gris", false, 0, 23);

let iPhone3G: Mobile = new Mobile("iPhone", "3G", "Apple Inc", "microSD", "black", false, 1, 60 );

let SamsugGalaxy10: Mobile = new Mobile("Samsug", "Galaxy 10", "SAMSUNG", "microSD", "black", true, 2, 358);

Nokia3210.imprimir();

iPhone3G.imprimir();

console.log("El precio de todos los móbiles de la librería es:")
console.log(SamsugGalaxy10.imprimir());