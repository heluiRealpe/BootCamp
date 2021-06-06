import { Mobile } from './retosRepaso2';

let Nokia3210: Mobile = new Mobile("Nokia",  "3210", "Nokia Corporation, Finland", "microSD", "azul/gris", false, 0, 23);

let iPhone3G: Mobile = new Mobile("iPhone", "3G", "Apple Inc", "microSD", "black", false, 1, 60 );

let SamsugGalaxy10: Mobile = new Mobile("Samsug", "Galaxy 10", "SAMSUNG", "microSD", "black", true, 2, 358);

console.log(Nokia3210, iPhone3G, SamsugGalaxy10);

Nokia3210.is5G = true;
Nokia3210.cameraNumber = 4;

console.log(Nokia3210);

console.log(Object.keys(Nokia3210));
