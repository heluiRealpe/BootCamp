export class Punto {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    toString(): string {
        return `(${this.x.toString()}, ${this.y.toString()})`;
    }

    getX() {
        return this.x;
    }
    setX(value: number) {
        this.x = value;
    }

    getY(value: number) {
        this.y = value;
    }

    distanciaAlOrigen(): number {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    calcularDistancia(otroPunto: Punto): number {
        return Math.sqrt(Math.pow((this.x - otroPunto.x), 2) + Math.pow((this.y - otroPunto.y), 2));
    }

    calcularCuadrante(): number {
        if (this.x == 0 || this.y == 0) {
            return 0;
        } else if (this.x > 0) {
            if (this.y > 0) {
                return 1;
            } else {
                return 4;
            }
        } else {
            if (this.y > 0) {
                return 2;
            } else {
                return 3;
            } 
        } 
    }

    calcularMasCercano(puntos: Punto[]): Punto {
        let distancia: Array<number> = Array(puntos.length);
        let elmenor: number = 0;
        for (var i = 0; i < puntos.length; i++) {
            distancia[i] = this.calcularDistancia(puntos[i]);
            if (i > 0) {
                if (distancia[i] > distancia[0]) {
                    elmenor = i;
                } else {
                    elmenor = i;
                }
            } else {
                if (distancia[i] > distancia[i-1]) {
                    elmenor = i-1;
                } else {
                    elmenor = i;
                }
            }
        }        
        return puntos[elmenor];
    }

}