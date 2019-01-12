import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/models/Article';

@Component({
  selector: 'app-radial-voter',
  templateUrl: './radial-voter.component.html',
  styleUrls: ['./radial-voter.component.css']
})
export class RadialVoterComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
    console.log(this.article);
  }

}
