"use strict";
exports.__esModule = true;
var book_1 = require("./book");
var libro1 = new book_1.Book('Introducción a Javascript', 233, "2344433-BC233333", "Joseph Smith", "Now Editions");
console.log(libro1.toString());
libro1.setTitle("\nOtRo");
libro1.setNpages(555);
libro1.setIssn("42323456-ECOLE");
libro1.setAuthor("El Propio");
libro1.setEditorial("Codenotch");
console.log(libro1.getAuthor());
console.log(libro1.getNpages());
console.log(libro1.getIssn());
console.log(libro1.getAuthor());
console.log(libro1.getEditorial());