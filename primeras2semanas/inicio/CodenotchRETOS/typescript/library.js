"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(book, address, manager) {
        this.book = book;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setManager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        for (var i = 0; i < this.book.length; i++) {
            console.log("\nLibro" + (i + 1) + "\n" + this.book[i].toString());
        }
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.book.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var resultado = Array();
        for (var i = 0; i < this.book.length; i++) {
            if (author == this.book[i].getAuthor()) {
                resultado.push(this.book[i]);
            }
        }
        return resultado;
    };
    return Library;
}());
exports.Library = Library;
