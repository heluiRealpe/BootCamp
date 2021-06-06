"use strict";
exports.__esModule = true;
exports.Punto = void 0;
var Punto = /** @class */ (function () {
    function Punto(x, y) {
        this.x = x;
        this.y = y;
    }
    Punto.prototype.toString = function () {
        return "(" + this.x.toString() + ", " + this.y.toString() + ")";
    };
    Punto.prototype.getX = function () {
        return this.x;
    };
    Punto.prototype.setX = function (value) {
        this.x = value;
    };
    Punto.prototype.getY = function (value) {
        this.y = value;
    };
    Punto.prototype.distanciaAlOrigen = function () {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    };
    Punto.prototype.calcularDistancia = function (otroPunto) {
        return Math.sqrt(Math.pow((this.x - otroPunto.x), 2) + Math.pow((this.y - otroPunto.y), 2));
    };
    Punto.prototype.calcularCuadrante = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        else if (this.x > 0) {
            if (this.y > 0) {
                return 1;
            }
            else {
                return 4;
            }
        }
        else {
            if (this.y > 0) {
                return 2;
            }
            else {
                return 3;
            }
        }
    };
    Punto.prototype.calcularMasCercano = function (puntos) {
        var distancia = Array(puntos.length);
        var elmenor = 0;
        for (var i = 0; i < puntos.length; i++) {
            distancia[i] = this.calcularDistancia(puntos[i]);
            if (i > 0) {
                if (distancia[i] > distancia[0]) {
                    elmenor = i;
                }
                else {
                    elmenor = i;
                }
            }
            else {
                if (distancia[i] > distancia[i - 1]) {
                    elmenor = i - 1;
                }
                else {
                    elmenor = i;
                }
            }
        }
        return puntos[elmenor];
    };
    return Punto;
}());
exports.Punto = Punto;
