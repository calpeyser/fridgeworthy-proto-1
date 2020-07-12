import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module'
import { HelloComponent } from './hello.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { TopicsBarComponent } from '../topics-bar/topics-bar.component';
import { CreationPageComponent } from '../creation-page/creation-page.component';
import { FeedComponent } from '../feed/feed.component';
import { CreationThumbnailComponent } from '../creation-thumbnail/creation-thumbnail.component';
import { CreatorPageComponent } from '../creator-page/creator-page.component';
import { NetflixFeedComponent } from '../netflix-feed/netflix-feed.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent, 
    LandingPageComponent,
    TopicsBarComponent,
    CreationPageComponent,
    FeedComponent,
    CreationThumbnailComponent,
    CreatorPageComponent,
    NetflixFeedComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
