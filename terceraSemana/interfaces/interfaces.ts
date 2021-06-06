interface TeslaModelS {
    readonly length: number;
    readonly width: number;
    readonly wheelbase: number;
    readonly seatingCapacity: number;
    getTyrePressure?: () => number;
    getRemCharging: () => number;
}

class TeslaModelSPrototype implements TeslaModelS {
    length: number;
    width: number;
    wheelbase: number;
    seatingCapacity: number;
    private tempCache: string;

    constructor (l, w, wb, sc) {
        this.length = l;
        this.width = w;
        this.wheelbase = wb;
        this.seatingCapacity = sc;
    }

    getTyrePressure () {
        let tyrePressure = 20 // Evaluated after doing a few complex computations!
        return tyrePressure
    }

    getRemCharging () {
        let remCharging = 20 // Evaluated after doing a few complex computations!
        return remCharging
    }
}

let teslaObj = new TeslaModelSPrototype(196, 86, 116, 4)
console.log('Tyre Pressure', teslaObj.getTyrePressure())

