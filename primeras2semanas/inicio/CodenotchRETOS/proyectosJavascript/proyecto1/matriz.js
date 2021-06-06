var myLib = require('./vector');

function crearMatriz(n, m, k) {
    var matriz = Array(n);
    for (var i = 0; i < matriz.length; i++) {
        matriz[i] = myLib.crearVector(m,k);
    }
    return matriz;
}

function sumaMatriz (m1, m2) {
    if (m1.length == m2.length) {
        var suma = Array(m1.length);
        for (var i = 0; i < m1.length; i++) {
            if (m1[i].length == m2[i].length) {
                suma[i] = Array(m1[i].length-1);
                suma[i] = myLib.sumaVector(m1[i],m2[i]);
            } 
        }
    }   
    return suma;
}

function productoNumMatriz(n, m1) {
    var mProducto = Array(m1.length);
    for (var i = 0; i < m1.length; i++) {
        mProducto[i] = myLib.productoNumVector(n, m1[i]);
    }
    return mProducto;
}

function restaMatriz(m1, m2) {
    if (m1.length == m2.length) {
        var resta = Array(m1.length);
        for (var i = 0; i < m1.length; i++) {
            resta[i] = Array(m1[i].length);
            resta[i] = myLib.restaVector(m1[i], m2[i]);
        }
    } else {
        var resta = "Las matrices no tienen el mismo número de elementos.";
    }
    return resta;  
}

function productoMatriz(m1, m2) {
    if (m1.length == m2.length) {
        var mult = Array((m1.length));
        for (var i = 0; i < m1.length; i++) {
            mult[i] = myLib.productoVector(m1[i], m2[i]);
        }
    } else {
        var mult = "Las matrices no tienen el mismo número de elementos.";
    }
    return mult;
}

module.exports = {crearMatriz, sumaMatriz, productoNumMatriz, restaMatriz, productoMatriz};



