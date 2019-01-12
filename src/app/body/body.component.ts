import { Component, OnInit } from '@angular/core';
import { Article } from '../models/Article';
import { ArticleFactory } from '../factories/ArticleFactory';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  articles: Article[] = [];

  constructor() { }

  ngOnInit() {
    const articleFactory = new ArticleFactory();
    for (let i = 0; i < 25; i++) {
      this.articles.push(articleFactory.getRandomArticle());
    }
  }

}
