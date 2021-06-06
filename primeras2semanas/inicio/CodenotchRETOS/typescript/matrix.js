"use strict";
exports.__esModule = true;
exports.Matrix = void 0;
var vector_1 = require("./vector");
var Matrix = /** @class */ (function () {
    function Matrix(n, m, k) {
        this.elements = new Array(n);
        for (var i = 0; i < n; i++) {
            this.elements[i] = new vector_1.Vector(m, k);
        }
    }
    Matrix.prototype.print = function () {
        console.log(this.elements);
    };
    Matrix.prototype.add = function (m1) {
        var resultado = new Matrix(this.elements.length, this.elements[0].getElements().length, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i].add(m1.elements[i]);
        }
        return resultado;
    };
    Matrix.prototype.multNumberMatrix = function (n) {
        var resultado = new Matrix(this.elements.length, this.elements[0].getElements().length, 0);
        for (var i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i].multNumber(n);
        }
        return resultado;
    };
    Matrix.prototype.mutSpecial = function (n) {
        var resultado = new Matrix(this.elements.length, this.elements[0].getElements().length, 0);
        for (var i = 0; i < this.elements.length; i++) {
            for (var j = 0; j < this.elements[i].getElements().length; j++) {
                if (this.elements[i].getElements()[j] % 2 == 0) {
                    resultado.elements[i].getElements()[j] = this.elements[i].getElements()[j] * n;
                }
                else {
                    resultado.elements[i].getElements()[j] = this.elements[i].getElements()[j] * (n - 1);
                }
            }
        }
        return resultado;
    };
    return Matrix;
}());
exports.Matrix = Matrix;
