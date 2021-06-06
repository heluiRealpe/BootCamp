import { Mobile } from './retosRepaso2_3parte';

export class MobileLibrary {
    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(name: string, location: string, mobiles: Mobile[], totalPrice: number) {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
        this.totalPrice = totalPrice;
    }

    getName() { 
        return this.name; 
    }
    setName(name: string) {
        this.name = name;
    }

    getLocation() {
        return this.location;
    }
    setLocation(location: string) {
        this.location = location;
    }

    getMobiles() {
        return this.mobiles;
    }
    setMobiles(mobiles: Mobile[]) {
        this.mobiles = mobiles;
    }

    getTotalPrice() {
        return this.totalPrice;
    }
    setTotalPrice(totalPrice: number) {
        this.totalPrice = totalPrice;
    }

    private totalPriceCalculation() {
        this.totalPrice = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            this.totalPrice += this.mobiles[i].getPrice();
        }
        return this.totalPrice;
    }

    printLibrary() {
        for (let i = 0; i < this.mobiles.length; i++) {
            this.mobiles[i].imprimir();
        }
        console.log(`\n· Price overall: ${this.totalPrice}`);
    }

    
}
