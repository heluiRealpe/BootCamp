import { Vector } from './vector';

export class Matrix {
    private elements: Array<Vector>;

    constructor(n: number, m: number, k: number) {
        this.elements = new Array(n);
        for (let i = 0; i < n; i++) {
            this.elements[i] = new Vector(m, k);
        }
    }
    
    print() {
        console.log(this.elements);
    }

    add(m1: Matrix): Matrix {
        let resultado: Matrix = new Matrix(this.elements.length, this.elements[0].getElements().length,0);
        for (let i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i].add(m1.elements[i]);
        }
        return resultado;
    }

    multNumberMatrix(n: number): Matrix {
        let resultado: Matrix = new Matrix(this.elements.length, this.elements[0].getElements().length,0);
        for (let i = 0; i < this.elements.length; i++) {
            resultado.elements[i] = this.elements[i].multNumber(n);
        }
        return resultado;
    }

    mutSpecial(n: number): Matrix{
        let resultado: Matrix = new Matrix(this.elements.length, this.elements[0].getElements().length,0);
        for (let i = 0; i < this.elements.length; i++) {
            for (let j = 0; j < this.elements[i].getElements().length; j++) {
                if (this.elements[i].getElements()[j] % 2 == 0) {
                    resultado.elements[i].getElements()[j] = this.elements[i].getElements()[j]*n;  
                }  else {
                    resultado.elements[i].getElements()[j] = this.elements[i].getElements()[j]*(n-1);          
                }
            }
        }
        return resultado;
    }    
}