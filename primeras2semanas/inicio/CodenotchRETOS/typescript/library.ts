import { Book } from './book'

export class Library {
    private book: Array<Book>;
    private address: string;
    private manager: string;

    constructor(book: Array<Book>, address: string, manager: string) {
        this.book = book;
        this.address = address;
        this.manager = manager;
    }

    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }

    getManager() {
        return this.manager;
    }
    setManager(manager) {
        this.manager = manager;
    }

    toString () {
        for (let i = 0; i < this.book.length; i++) {
            console.log(`\nLibro${i+1}\n${this.book[i].toString()}`);
        }
    }

    getNumberOfBooks () : number {
        return this.book.length;
    }

    findByAuthor (author: string) {
        let resultado = Array();
        for (let i = 0; i < this.book.length; i++) {
            if (author == this.book[i].getAuthor()) {
                resultado.push(this.book[i]);
            }
        }
        return resultado;
    }
}
