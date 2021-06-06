export class Person {
    public name: string;
    public age: number;
    private address: string;

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    printName() {
        console.log(this.name);
    }

    yearOfBirth(currentYear: number): number {
        let anyoNacimiento = new Date().getFullYear() - currentYear;
        return anyoNacimiento;
    }

    setAddress(adress: string) {
        this.address = adress;
    }

    getAddres(): string {
        return this.address;
    }
}
