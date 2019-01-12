import { Author } from "./Author";
import { Publisher } from "./Publisher";
import { BaseDomainClass } from "./BaseDomainClass";

export class Article extends BaseDomainClass {

    title: string;
    url: string;
    authorId: string;
    author: Author;
    publisherId: string;
    publisher: Publisher;

    constructor(
        title: string,
        url: string,
        author: Author,
        publisher: Publisher
    ) {
        super();

        this.title = title;
        this.url = url;
        this.author = author;
        this.publisher = publisher;
    }
}