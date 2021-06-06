import { MobileLibrary } from './retosRepaso3';
import { Mobile } from './retosRepaso2_3parte';

let Nokia3210: Mobile = new Mobile("Nokia",  "3210", "Nokia Corporation, Finland", "microSD", "azul/gris", false, 0, 23);

let iPhone3G: Mobile = new Mobile("iPhone", "3G", "Apple Inc", "microSD", "black", false, 1, 60 );

let SamsugGalaxy10: Mobile = new Mobile("Samsug", "Galaxy 10", "SAMSUNG", "microSD", "black", true, 2, 358);

let misMobiles: MobileLibrary = new MobileLibrary("Héctor", "Madrid", [Nokia3210, iPhone3G, SamsugGalaxy10], 441);

console.log("misMobiles:")
console.log(misMobiles);

// console.log("misMobiles.totalPriceCalculation():")
// console.log(misMobiles.totalPriceCalculation());

misMobiles.printLibrary();