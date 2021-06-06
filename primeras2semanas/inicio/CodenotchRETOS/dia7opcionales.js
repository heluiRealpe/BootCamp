// RETO 10:

class Vector {
    constructor (n, m) {
        var arrayNum = Array(n);
        for (var i = 0; i < arrayNum.length; i++) {
                arrayNum[i] = Math.round(Math.random()*m);
        }
        this.array = arrayNum;
    }

    suma(a) {
        if (a.length == this.array.length) {
            var sumaVector = a;
            for (var i = 0; i < this.array.length; i++) {
                sumaVector[i] += this.array[i];
            }
        } else {
            var sumaVector = "Los dos vectores no tienen el mismo número de elementos.";
        }
        return sumaVector;
    }

    productoNum(x) {
        var producto = this.array;
        for (var i = 0; i < this.array.length; i++) {
            producto[i] *= x;
        }
        return producto;
    }

    resta(a) {
        if (this.array.length == a.length) {
            var resta = Array((this.array.length));
            for (var i = 0; i < this.array.length; i++) {
                resta[i] = this.array[i] - a[i];
            }
        } else {
            var resta = "Los dos vectores no tienen el mismo número de elementos.";
        }
        return resta;
    }

    producto(a) {
        if (this.array.length == a.length) {
            var mult = Array(this.array.length);
            for (var i = 0; i < this.array.length; i++) {
                mult[i] = this.array[i] * a[i];
            }
        } else {
            var mult = "Los dos vectores no tienen el mismo número de elementos.";
        }
        return mult;
    }

    extraer() {
        var extraer = this.array;
        return extraer;
    }
}

module.exports = {Vector};