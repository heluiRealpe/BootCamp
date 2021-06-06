import { Matrix } from './matrix';

let matrix1: Matrix = new Matrix(3,5,10);
let matrix2: Matrix = new Matrix(3,5,15);

console.log("matrix1.print()");
matrix1.print();

console.log("matrix2.print()");
matrix2.print();

console.log("matrix1.add(matrix2).print():");
matrix1.add(matrix2).print();

console.log("matrix1.multNumberMatrix(4):");
matrix1.multNumberMatrix(4).print();

matrix1

console.log("matrix1.mutSpecial(5):");
matrix1.mutSpecial(5).print();
