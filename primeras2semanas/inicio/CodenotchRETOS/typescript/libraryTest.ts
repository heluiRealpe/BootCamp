import { Library } from './library';
import { Book } from './book';

let libro1: Book = new Book('Introducción a Javascript', 233, "2344433-BC233333", "Joseph Smith", "Now Editions");
let libro2: Book = new Book('la cosa del libro 2', 123, "645498498-BC233333", "Cirilo", "Alfaguara");
let libro3: Book = new Book('Aquello de allá', 345, "2344433-648489849", "Joseph Campbell", "Alianza Editorial");
let libro4: Book = new Book('Introducción a Javascript2', 456, "2135484-BC233333", "Joseph Smith", "Now Editions");

let conjuntoLibros: Array<Book> = [libro1, libro2, libro3, libro4];

let library1: Library = new Library(conjuntoLibros, "Calle Canarias 57", "Héctor");

console.log(library1.toString());

console.log(library1.getNumberOfBooks());

console.log(library1.findByAuthor("Joseph Smith"));
