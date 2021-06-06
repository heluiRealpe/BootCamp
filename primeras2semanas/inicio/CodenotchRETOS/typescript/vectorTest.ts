import { Vector } from './vector';

let vector1 = new Vector(3,20);

let vector2 = new Vector(3,10);

console.log("vector1.print():")
vector1.print();

console.log("vector2.print():")
vector2.print();

console.log("vector1.getElements():")
console.log(vector1.getElements());

console.log("vector1.add(vector2):")
console.log(vector1.add(vector2));

console.log("vector1.subs(vector2):")
console.log(vector1.subs(vector2));

console.log("vector1.mult(vector2):")
console.log(vector1.mult(vector2));

console.log("vector1.multNumber(5):")
console.log(vector1.multNumber(5));

console.log(vector1.getElements()[1]);


