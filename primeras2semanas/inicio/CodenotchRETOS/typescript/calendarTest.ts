import { Calendar } from './calendar';
import { Person } from './person';

let persona1: Person = new Person("Héctor", 38, "vacío");
let persona2: Person = new Person("Ana", 33, "vacío");
let persona3: Person = new Person("Belén", 32, "vacío");

let grupoPersonas: Array<Person> = [persona1, persona2, persona3];

let calendar1: Calendar = new Calendar();

calendar1.people = grupoPersonas;

calendar1.printCalendar();