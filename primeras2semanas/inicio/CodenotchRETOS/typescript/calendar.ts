import { Person } from './person';

export class Calendar {
    public people: Array<Person>;

    constructor () {
        this.people = new Array();
    }

    printCalendar() {
        for (let i = 0; i < Person.length; i++) {
        console.log(this.people[i]);
        }
    }
}
