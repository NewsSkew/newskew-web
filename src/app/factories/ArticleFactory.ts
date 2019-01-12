import { Article } from "../models/Article";
import { Author } from "../models/Author";
import { Publisher } from "../models/Publisher";

export class ArticleFactory {

    articleCount: number = 1;

    constructor() { }

    getRandomArticle() {
        const randomArticle = new Article(
            `Article #${this.articleCount}`,
            'https://www.google.com',
            new Author(
                "Randomauthor",
                `Number${this.articleCount}`,
            ),
            new Publisher(
                `Publisher${this.articleCount}`,
                "www.twitter.com",
                null
            )
        );

        this.articleCount++;

        return randomArticle;
    }
}