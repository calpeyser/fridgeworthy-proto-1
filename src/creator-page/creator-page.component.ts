import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Creator } from '../creator/creator';
import { CreatorService } from '../creator/creator.service';
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
    private creatorService : CreatorService,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.creator = this.creatorService.getCreatorByName(params.get('name'))
    })
  }

}