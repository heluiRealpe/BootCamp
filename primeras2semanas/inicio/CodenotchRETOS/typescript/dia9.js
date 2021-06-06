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

let persona1 = new Person("Héctor", 38, );

persona1.printName();

console.log(persona1.yearOfBirth(38));

persona1.setAddress("Calle Canarias 57, 2 Derecha, 28045, Madrid.");

console.log(persona1.getAddres());