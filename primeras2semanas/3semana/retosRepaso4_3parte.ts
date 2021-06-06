import { Punto } from './retosRepaso4';

export class Triangulo {
    private punto1: Punto;
    private punto2: Punto;
    private punto3: Punto;

    constructor(punto1: Punto, punto2: Punto, punto3: Punto) {
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3;
    }

    calcularLongitudLados(): number[] {
        let array: Array<number> = Array(3);
        array[0] = this.punto1.calcularDistancia(this.punto2);
        array[1] = this.punto1.calcularDistancia(this.punto3);
        array[2] = this.punto2.calcularDistancia(this.punto3);
        return array;
    }
}