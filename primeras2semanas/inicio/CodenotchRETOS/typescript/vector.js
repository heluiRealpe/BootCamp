"use strict";
exports.__esModule = true;
exports.Vector = void 0;
var Vector = /** @class */ (function () {
    function Vector(n, k) {
        this.elements = new Array(n);
        for (var i = 0; i < n; i++) {
            this.elements[i] = Math.round(Math.random() * k);
        }
    }
    Vector.prototype.print = function () {
        console.log(this.elements);
    };
    Vector.prototype.add = function (v1) {
        var resultado = new Vector(this.elements.length, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i] + v1.elements[i];
        }
        return resultado;
    };
    Vector.prototype.subs = function (v1) {
        var resultado = new Vector(this.elements.length, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i] - v1.elements[i];
        }
        return resultado;
    };
    Vector.prototype.mult = function (v1) {
        var resultado = new Vector(this.elements.length, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i] * v1.elements[i];
        }
        return resultado;
    };
    Vector.prototype.multNumber = function (n) {
        var resultado = new Vector(this.elements.length, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i] * n;
        }
        return resultado;
    };
    Vector.prototype.getElements = function () {
        return this.elements;
    };
    return Vector;
}());
exports.Vector = Vector;
