"use strict";
exports.__esModule = true;
var retosRepaso3_1 = require("./retosRepaso3");
var retosRepaso2_3parte_1 = require("./retosRepaso2_3parte");
var Nokia3210 = new retosRepaso2_3parte_1.Mobile("Nokia", "3210", "Nokia Corporation, Finland", "microSD", "azul/gris", false, 0, 23);
var iPhone3G = new retosRepaso2_3parte_1.Mobile("iPhone", "3G", "Apple Inc", "microSD", "black", false, 1, 60);
var SamsugGalaxy10 = new retosRepaso2_3parte_1.Mobile("Samsug", "Galaxy 10", "SAMSUNG", "microSD", "black", true, 2, 358);
var misMobiles = new retosRepaso3_1.MobileLibrary("Héctor", "Madrid", [Nokia3210, iPhone3G, SamsugGalaxy10], 441);
console.log("misMobiles:");
console.log(misMobiles);
// console.log("misMobiles.totalPriceCalculation():")
// console.log(misMobiles.totalPriceCalculation());
misMobiles.printLibrary();
