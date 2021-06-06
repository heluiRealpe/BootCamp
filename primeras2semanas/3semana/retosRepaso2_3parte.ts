export class Mobile {
    private name: string;
    private model: string;
    private trademark: string;
    private sdSize: string;
    private color: string;
    private is5G: boolean;
    private cameraNumber: number;
    private price: number;

    constructor(name: string, model: string, trademark: string, sdSize: string, color: string, is5G: boolean, cameraNumber: number, price: number) {
        this.name = name;
        this.model = model;
        this.trademark = trademark;
        this.sdSize = sdSize;
        this.color = color;
        this. is5G = is5G;
        this.cameraNumber = cameraNumber;
        this.price = price;
    }

    getName() {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }

    getModel() {
        return this.model;
    }
    setModel(model: string) {
        this.model = model;
    }

    getTrademark() {
        return this.trademark;
    }
    setTrademark(trademark: string) {
        this.trademark = trademark;
    }

    getSdsize() {
        return this.sdSize;
    }
    setSdsize(sdsize: string) {
        this.sdSize = sdsize;
    }

    getColor() {
        return this.color;
    }
    setColor(color: string) {
        this.color = color;
    }

    getIs5G() {
        return this.is5G;
    }
    setIs5G(is5G: boolean) {
        this.is5G = is5G;
    }

    getCameraNumber() {
        return this.cameraNumber;
    }
    setCameraNumber(cameraNumber: number) {
        this.cameraNumber = cameraNumber;
    }

    getPrice() {
        return this.price;
    }
    setPrice(price: number) {
        this.price = price;
    }

    imprimir() {
        console.log(`\nThe characteristics of the mobile name are:\n· Name: ${this.name}\n· Model: ${this.model}\n· Trademark: ${this.trademark}\n· SD sizze(GB): ${this.sdSize}\n· Color: ${this.color}\n· Is 5g?: ${this.is5G}\n· Number of Cameras: ${this.cameraNumber}`);
    }
}