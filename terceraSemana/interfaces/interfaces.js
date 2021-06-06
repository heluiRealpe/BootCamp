var TeslaModelSPrototype = /** @class */ (function () {
    function TeslaModelSPrototype(l, w, wb, sc) {
        this.length = l;
        this.width = w;
        this.wheelbase = wb;
        this.seatingCapacity = sc;
    }
    TeslaModelSPrototype.prototype.getTyrePressure = function () {
        var tyrePressure = 20; // Evaluated after doing a few complex computations!
        return tyrePressure;
    };
    TeslaModelSPrototype.prototype.getRemCharging = function () {
        var remCharging = 20; // Evaluated after doing a few complex computations!
        return remCharging;
    };
    return TeslaModelSPrototype;
}());
var teslaObj = new TeslaModelSPrototype(196, 86, 116, 4);
console.log('Tyre Pressure', teslaObj.getTyrePressure());
