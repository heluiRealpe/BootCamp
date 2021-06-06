function crearVector(n, m) {
    var vector = Array(n);
    for (var i = 0; i < vector.length; i++) {
        vector[i] = Math.round(Math.random()*m);
    }
    return vector;
}

function sumaVector(v1, v2) {
    if (v1.length == v2.length) {
        var suma = v1;
        for (var i = 0; i < v1.length; i++) {
            suma[i] += v2[i];
        }
    } else {
        var suma = "Los dos vectores no tienen el mismo número de elementos.";
    }
    return suma;
}

function productoNumVector(n, v1) {
    var producto = v1;
    for (var i = 0; i < v1.length; i++) {
        producto[i] *= n;
    }
    return producto;
}

function restaVector(v1, v2) {
    if (v1.length == v2.length) {
        var resta = Array((v1.length));
        for (var i = 0; i < v1.length; i++) {
            resta[i] = v1[i] - v2[i];
        }
    } else {
        var resta = "Los dos vectores no tienen el mismo número de elementos.";
    }
    return resta;
}

function productoVector(v1, v2) {
    if (v1.length == v2.length) {
        var mult = Array((v1.length));
        for (var i = 0; i < v1.length; i++) {
            mult[i] = v1[i] * v2[i];
        }
    } else {
        var mult = "Los dos vectores no tienen el mismo número de elementos.";
    }
    return mult;
}

module.exports = {crearVector, sumaVector, productoNumVector, restaVector, productoVector};
