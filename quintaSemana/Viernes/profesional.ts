export class Profesional  {
    
    public name: string;
    public age: number;
    public genre: string;
    public weight: number;
    public height: number;
    public hairColor: string;
    public eyeColor: string;
    public race: string;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor(name: string, age: number, genre: string, weight: number, height: number, hairColor: string, eyeColor: string, race: string, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string) {
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

    setName(): string { 
        return this.name;
    }
    getName(name: string) {
        this.name = name;
    }

    setAge(): number {
        return this.age;
    }
    getAge(age: number) {
        this.age = age;
    }

    setGenre(): string {
        return this.genre;
    }
    getGenre(genre: string) {
        this.genre = genre;
    }


    imprimirValores(): void {
        let properties : string = "";
        for (let property in this) {
            if (this[property].toString().search(/function/i)) {
                properties += `${property} - ${this[property]}\n`;
            }
        }
        console.log(properties);
    }
}


