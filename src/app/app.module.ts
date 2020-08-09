import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import * as creationReducer from '../creation/creation.reducer';
import * as creatorReducer from '../creator/creator.reducer';

import { AppComponent } from './app.component';
import { AppRoutingModule} from './app-routing.module'
import { HelloComponent } from './hello.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { LandingPageComponent } from '../landing-page/landing-page.component';
import { TopicsBarComponent } from '../topics-bar/topics-bar.component';
import { CreationPageComponent } from '../creation-page/creation-page.component';
import { CreationThumbnailComponent } from '../creation-thumbnail/creation-thumbnail.component';
import { CreatorPageComponent } from '../creator-page/creator-page.component';
import { NetflixFeedComponent } from '../netflix-feed/netflix-feed.component';
import { JoinModalComponent } from '../join-modal/join-modal.component';
import { ViewerJoinComponent } from '../viewer-join/viewer-join.component';
import { CreatorJoinComponent } from '../creator-join/creator-join.component';
import { ConnectJoinComponent } from '../connect-join/connect-join.component';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { LoginFormComponent } from '../login-form/login-form.component';
import { CommentSectionComponent } from '../comment-section/comment-section.component';
import { PrimaryCommentComponent } from '../primary-comment/primary-comment.component';
import { CommentBoxComponent } from '../comment-box/comment-box.component';
import { SecondaryCommentComponent } from '../secondary-comment/secondary-comment.component';
import { AddCreationThumbnailComponent } from '../add-creation-thumbnail/add-creation-thumbnail.component';
import { CreateCreationModalComponent } from '../create-creation-modal/create-creation-modal.component';
import { ModifyCreationFormComponent } from '../modify-creation-form/modify-creation-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      creation : creationReducer.reducer,
      creator : creatorReducer.reducer,
    }),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent, 
    LandingPageComponent,
    TopicsBarComponent,
    CreationPageComponent,
    CreationThumbnailComponent,
    CreatorPageComponent,
    NetflixFeedComponent,
    JoinModalComponent,
    ViewerJoinComponent,
    CreatorJoinComponent,
    ConnectJoinComponent,
    LoginModalComponent,
    LoginFormComponent,
    CommentSectionComponent,
    PrimaryCommentComponent,
    CommentBoxComponent,
    SecondaryCommentComponent,
    AddCreationThumbnailComponent,
    CreateCreationModalComponent,
    ModifyCreationFormComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
