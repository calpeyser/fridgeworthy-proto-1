import { Component, OnInit, Input } from '@angular/core';
import { CreationService } from '../creation/creation.service';
import { Creation } from '../creation/creation';
import { Observable } from 'rxjs';

export enum FeedMode {
  BY_CATEGORY, BY_CREATOR
}

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() key : String;
  @Input() mode : FeedMode;

  constructor(private creationService : CreationService) { }

  ngOnInit() {
  }

  getCreationsWithKey(key : String) {
    if (this.mode == FeedMode.BY_CATEGORY) {
      return this.creationService.getCreationsByCategory(key)
    } else if (this.mode == FeedMode.BY_CREATOR) {
      return this.creationService.getCreationsByCreatorName(key)
    }
  }

}