// RETO 11:
var myLib = require('./dia7opcionales');

class Matriz {
    constructor (n, m, k) {
        this.matriz = new Array(n);
        for (var i = 0; i < n; i++) {
            this.matriz[i] = new myLib.Vector(m,k);
        }
    }

    extraer() {
        var extraer = this.matriz;
        return extraer;
    }
    
    suma(m) {
        if (this.matriz.length == m.length) {
            for (var i = 0; i < m.length; i++) {
                if (this.matriz[i].Array.length == m[i].array.length) {
                    for(var j = 0; j < m[i].length; j++) {
                        m[i].array[j] += this.matriz[i].array[j];
                    }
                } 
            }
        }   
        return m;
    }

    productoNum(n) {
        for (var i = 0; i < this.matriz.length; i++) {
                for (var j = 0; j < this.matriz[i].array.length; j++) {
                    this.matriz[i].array[j] *= n;
                }
            }
        return this.matriz;
    }

    resta(m) {
        if (this.matriz.length == m.length) {
            for (var i = 0; i < this.matriz.length; i++) {
                for (var j = 0; j < this.matriz[i].array.length; j++) {
                    m[i].array[j] -= this.matriz[i].array[j];
                }
            }
        } else {
            var m = "Las matrices no tienen el mismo número de elementos.";
        }
        return m;
    }

    producto(m) {
        if (this.matriz.length == m.length) {
            for (var i = 0; i < this.matriz.length; i++) {
                for (var j = 0; j < this.matriz[i].array.length; j++) {
                    m[i].array[j] *= this.matriz[i].array[j];
                }
            }
        } else {
            var m = "Las matrices no tienen el mismo número de elementos.";
        }
        return m;
    }
}

module.exports = {Matriz};