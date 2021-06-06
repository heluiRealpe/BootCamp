"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.printName = function () {
        console.log(this.name);
    };
    Person.prototype.yearOfBirth = function (currentYear) {
        var anyoNacimiento = new Date().getFullYear() - currentYear;
        return anyoNacimiento;
    };
    Person.prototype.setAddress = function (adress) {
        this.address = adress;
    };
    Person.prototype.getAddres = function () {
        return this.address;
    };
    return Person;
}());
exports.Person = Person;
