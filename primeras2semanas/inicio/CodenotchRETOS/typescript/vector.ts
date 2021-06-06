export class Vector {
    private elements: Array<number>;

    constructor(n: number, k: number) {
        this.elements = new Array(n);
        for (let i = 0; i < n; i++) {
            this.elements[i] = Math.round(Math.random() *k);
        }
    }

    print() {
        console.log(this.elements);
    }

    add(v1: Vector): Vector {
        let resultado: Vector = new Vector(this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i] + v1.elements[i];
        }
        return resultado;
    }

    subs(v1: Vector): Vector {
        let resultado: Vector = new Vector(this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i] - v1.elements[i];
        }
        return resultado;
    }

    mult(v1: Vector): Vector{
        let resultado: Vector = new Vector(this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i] * v1.elements[i];
        }
        return resultado;
    }

    multNumber(n: number): Vector {
        let resultado: Vector = new Vector(this.elements.length, 0);
        for (let i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i] * n;
        }
        return resultado;
    }

    getElements(): number[] {
        return this.elements;
    }
}