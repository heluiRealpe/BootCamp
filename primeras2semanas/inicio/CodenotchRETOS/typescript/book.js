"use strict";
exports.__esModule = true;
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, nPages, issn, author, editorial) {
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.setTitle = function (title) {
        this.title = title;
    };
    Book.prototype.getNpages = function () {
        return this.nPages;
    };
    Book.prototype.setNpages = function (nPages) {
        this.nPages = nPages;
    };
    Book.prototype.getIssn = function () {
        return this.issn;
    };
    Book.prototype.setIssn = function (issn) {
        this.issn = issn;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setAuthor = function (author) {
        this.author = author;
    };
    Book.prototype.getEditorial = function () {
        return this.editorial;
    };
    Book.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Book.prototype.toString = function () {
        return "Title - " + this.title + "\nNumer of Pages - " + this.nPages + "\nISSN - " + this.issn + "\nAutor - " + this.author + "\nEditorial - " + this.editorial;
    };
    return Book;
}());
exports.Book = Book;
