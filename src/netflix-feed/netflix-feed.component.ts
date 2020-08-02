import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Creation } from '../creation/creation';
import * as CreationSelectors from '../creation/creation.selector';

import { FeedMode } from '../feed/feed.component'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const CREATIONS_PER_SECTION = 4

class CreationSection {
  creations : Creation[]
  section : Number
  prevSection : Number
  nextSection : Number
}

@Component({
  selector: 'app-netflix-feed',
  templateUrl: './netflix-feed.component.html',
  styleUrls: ['./netflix-feed.component.css']
})
export class NetflixFeedComponent implements OnInit {

  @Input() key : String;
  @Input() category: String
  @Input() mode : FeedMode;
  @Input() carouselID : Number;

  constructor(private store : Store) { }

  ngOnInit() {
  }
  getSectionsWithKey(key : String) : Observable<CreationSection[]> {
    var creationStream : Observable<Creation[]>;
    if (this.mode == FeedMode.BY_CATEGORY) {
      creationStream = this.store.pipe(select(CreationSelectors.selectCreationsByCategory, { category: key }))
    } else if (this.mode == FeedMode.BY_CREATOR) {
      creationStream = this.store.pipe(select(CreationSelectors.selectCreationsByCreatorId, { creatorId: key }))
    }
    var splitCreations : Observable<CreationSection[]>;

    // Fill sections
    splitCreations = creationStream.pipe(map((creations : Creation[]) : CreationSection[] => {
      var res : CreationSection[] = [];
      var currentSectionNumber = 0;
      var currentSection : CreationSection = new CreationSection();
      currentSection.creations = []
      currentSection.section = currentSectionNumber;
      for (let creation of creations) {
        if (currentSection.creations.length < CREATIONS_PER_SECTION) {
          currentSection.creations.push(creation)
        } else {
          res.push(currentSection)
          currentSection = new CreationSection();
          currentSection.creations = []
        }
      }
      if (currentSection.creations.length > 0 && currentSection.creations.length < CREATIONS_PER_SECTION) {
        res.push(currentSection)
      }

      // Set indexes of surrounding sections
      res.forEach((section, index) => {
        section.section = index
        if (index == 0) {
          section.nextSection = (res.length == 1)
            ? 0
            : 1
          section.prevSection = res.length - 1
        } else if (index == res.length - 1) {
          section.nextSection = 0
          section.prevSection = (res.length == 1)
            ? 0
            : res.length - 2
        } else {
          section.nextSection = index + 1
          section.prevSection = index - 1
        }
      })

      if (key == 'Category 2') {
        console.log(res)
      }
      return res;
    }))

    return splitCreations
  }
}