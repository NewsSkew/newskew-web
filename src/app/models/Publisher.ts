import { BaseDomainClass } from "./BaseDomainClass";

export class Publisher extends BaseDomainClass{

    name: string;
    url: string;
    parent: Publisher;

    constructor(
        name: string,
        url: string,
        parent: Publisher
    ) {
        super();

        this.name = name;
        this.url = url;
        this.parent = parent;
    }
}