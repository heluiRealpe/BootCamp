class Direccion {
    private calle: string;
    private numero: number;
    private piso: number;
    private puerta: string;

    constructor(calle: string, numero: number, piso: number, puerta: string) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.puerta = puerta;
    }

    public getCalle():string {
        return this.calle;
    }

    public getNumero():number {
        return this.numero;
    }

    public setCalle(calle:string) {
        this.calle = calle;
    }

    public setNumero(numero:number) {
        this.numero = numero;
    }

    public esPisoPar(): boolean {
        return (this.piso % 2 == 0);
    }

    public showDireccion() {
        console.log(this.toString());
    }

    private toString():string {
        return "Dirección: " + this.calle + " " + this.numero + " " + this.piso + " " + this.puerta;
    }

}

let miCalle: Direccion = new Direccion("Teruel", 8, 2, "Izq");

console.log(miCalle.esPisoPar());

miCalle.setCalle("Avila");
console.log(miCalle.getNumero());

miCalle.showDireccion();

