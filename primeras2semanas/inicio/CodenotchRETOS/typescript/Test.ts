import { Person } from "./person";

let persona1 = new Person("Héctor", 38, "vacio");

persona1.printName();

console.log(persona1.yearOfBirth(38));

persona1.setAddress("Calle Canarias 57, 2 Derecha, 28045, Madrid.");

console.log(persona1.getAddres());