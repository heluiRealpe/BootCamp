"use strict";
exports.__esModule = true;
exports.Triangulo = void 0;
var Triangulo = /** @class */ (function () {
    function Triangulo(punto1, punto2, punto3) {
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3;
    }
    Triangulo.prototype.calcularLongitudLados = function () {
        var array = Array(3);
        array[0] = this.punto1.calcularDistancia(this.punto2);
        array[1] = this.punto1.calcularDistancia(this.punto3);
        array[2] = this.punto2.calcularDistancia(this.punto3);
        return array;
    };
    return Triangulo;
}());
exports.Triangulo = Triangulo;
