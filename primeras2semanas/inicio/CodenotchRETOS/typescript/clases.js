var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, puerta) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.puerta = puerta;
    }
    Direccion.prototype.getCalle = function () {
        return this.calle;
    };
    Direccion.prototype.getNumero = function () {
        return this.numero;
    };
    Direccion.prototype.setCalle = function (calle) {
        this.calle = calle;
    };
    Direccion.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Direccion.prototype.esPisoPar = function () {
        return (this.piso % 2 == 0);
    };
    Direccion.prototype.showDireccion = function () {
        console.log(this.toString());
    };
    Direccion.prototype.toString = function () {
        return "Dirección: " + this.calle + " " + this.numero + " " + this.piso + " " + this.puerta;
    };
    return Direccion;
}());
var miCalle = new Direccion("Teruel", 8, 2, "Izq");
console.log(miCalle.esPisoPar());
miCalle.setCalle("Avila");
console.log(miCalle.getNumero());
miCalle.showDireccion();
