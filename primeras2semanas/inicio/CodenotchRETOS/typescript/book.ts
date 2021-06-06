export class Book {
    private title: string;
    private nPages: number;
    private issn: string;
    private author: string;
    private editorial: string;

    constructor (title: string, nPages: number, issn: string, author: string, editorial: string) {
        this.title = title;
        this.nPages = nPages;
        this.issn = issn;
        this.author = author;
        this.editorial = editorial;

    }

    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }

    getNpages() {
        return this.nPages;
    }
    setNpages(nPages) {
        this.nPages = nPages;
    }

    getIssn() {
        return this.issn;
    }
    setIssn(issn) {
        this.issn = issn;
    }

    getAuthor() {
        return this.author;
    }
    setAuthor(author) {
        this.author = author;
    }

    getEditorial() {
        return this.editorial;
    }
    setEditorial(editorial) {
        this.editorial = editorial;
    }

    toString () : string {
        return `Title - ${this.title}\nNumer of Pages - ${this.nPages}\nISSN - ${this.issn}\nAutor - ${this.author}\nEditorial - ${this.editorial}`;
    }

}
