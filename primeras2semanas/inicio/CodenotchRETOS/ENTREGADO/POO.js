class Poligono {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const cuadrado = new Poligono (10,10);
console.log(cuadrado.width)
console.log(cuadrado.calcArea());

/*
class Punto {
    constructor (coordenadaX, coordenadaY) {
        this.coordenadaX = coordenadaX;
        this.coordenadaY = coordenadaY;
    }

    get X() {
        return this.coordenadaX;
    }

    get Y() {
        return this.coordenadaY;
    }

    getX() {
        return this.coordenadaX;
    }

    getY() {
        return this.coordenadaY;
    }
}

p1 = new Punto(10,20);

console.log(p1.coordenadaX);
console.log(p1.X);
console.log(p1.getX());

console.log(p1.coordenadaY);
console.log(p1.Y);
console.log(p1.getY());
*/