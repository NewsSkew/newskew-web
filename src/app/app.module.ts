import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ArticleCardComponent } from './body/article-card/article-card.component';
import { RadialVoterComponent } from './body/article-card/radial-voter/radial-voter.component';
import { RadialPinComponent } from './body/article-card/radial-voter/radial-pin/radial-pin.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ArticleCardComponent,
    RadialVoterComponent,
    RadialPinComponent,
    TopnavComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
