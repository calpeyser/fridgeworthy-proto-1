import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Creator } from '../creator/creator';
import * as CreatorSelectors from '../creator/creator.selector';
import { FeedMode } from '../netflix-feed/netflix-feed.component';
import { AuthService, User } from '../auth/auth.service';

@Component({
  selector: 'app-creator-page',
  templateUrl: './creator-page.component.html',
  styleUrls: ['./creator-page.component.css']
})
export class CreatorPageComponent implements OnInit {
  creator : Observable<Creator>;
  isLoggedIn : Observable<boolean>
  modes = FeedMode;

  constructor(
    private store : Store,
    private auth : AuthService,
    private route : ActivatedRoute) {
    }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.creator = this.store.pipe(select(CreatorSelectors.selectCreationById, { creatorId: params.get('id') }))
      this.isLoggedIn = this.thisCreatorIsLoggedIn()
    })
  }

  thisCreatorIsLoggedIn() : Observable<boolean> {
    return combineLatest(this.auth.user, this.creator, 
      (loggedInUser, pageCreator) => {
        console.log(loggedInUser)
        console.log(pageCreator)
        return loggedInUser.uid == pageCreator.id
      })
  }
}