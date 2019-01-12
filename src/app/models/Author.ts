import { BaseDomainClass } from "./BaseDomainClass";

export class Author extends BaseDomainClass {

    firstName: string;
    lastName: string;

    constructor(
        firstName: string,
        lastName: string
    ) {
        super();

        this.firstName = firstName;
        this.lastName = lastName;
    }
}