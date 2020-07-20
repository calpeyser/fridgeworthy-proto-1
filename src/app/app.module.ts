import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { JoinModalComponent } from '../join-modal/join-modal.component';
import { ViewerJoinComponent } from '../viewer-join/viewer-join.component';
import { CreatorJoinComponent } from '../creator-join/creator-join.component';
import { ConnectJoinComponent } from '../connect-join/connect-join.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
    JoinModalComponent,
    ViewerJoinComponent,
    CreatorJoinComponent,
    ConnectJoinComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
