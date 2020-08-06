import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Creator } from '../creator/creator';
import * as CreatorSelectors from '../creator/creator.selector';
import { FeedMode } from '../netflix-feed/netflix-feed.component';

@Component({
  selector: 'app-creator-page',
  templateUrl: './creator-page.component.html',
  styleUrls: ['./creator-page.component.css']
})
export class CreatorPageComponent implements OnInit {
  creator : Observable<Creator>;
  modes = FeedMode;

  constructor(
    private store : Store,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.creator = this.store.pipe(select(CreatorSelectors.selectCreationById, { creatorId: Number(params.get('id')) }))
    })
  }

}