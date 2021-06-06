"use strict";
exports.__esModule = true;
exports.Profesional = void 0;
var Profesional = /** @class */ (function () {
    function Profesional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }
    Profesional.prototype.setName = function () {
        return this.name;
    };
    Profesional.prototype.getName = function (name) {
        this.name = name;
    };
    Profesional.prototype.setAge = function () {
        return this.age;
    };
    Profesional.prototype.getAge = function (age) {
        this.age = age;
    };
    Profesional.prototype.setGenre = function () {
        return this.genre;
    };
    Profesional.prototype.getGenre = function (genre) {
        this.genre = genre;
    };
    Profesional.prototype.imprimirValores = function () {
        var properties = "";
        for (var property in this) {
            if (this[property].toString().search(/function/i)) {
                properties += property + " - " + this[property] + "\n";
            }
        }
        console.log(properties);
    };
    return Profesional;
}());
exports.Profesional = Profesional;
