import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Creation } from '../creation/creation';
import * as CreationSelectors from '../creation/creation.selector';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const CREATIONS_PER_SECTION = 4

export enum FeedMode {
  BY_CATEGORY, BY_CREATOR
}

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
  @Input() mode : FeedMode;
  @Input() carouselID : Number;

  @Input() isCreatable : boolean = false;

  constructor(private store : Store) { }

  ngOnInit() {
  }
  
  creationsPerSection(currentSectionNumber : Number) : Number {
    // If the feed isCreatable, we leave extra room for the creation thumbnail
    if (this.isCreatable) {
      if (this.mode != FeedMode.BY_CREATOR) {
        console.log("Feed isCreatable, but mode is " + this.mode)
        return CREATIONS_PER_SECTION
      } else if (currentSectionNumber == 0) {
        return CREATIONS_PER_SECTION - 1
      } else {
        return CREATIONS_PER_SECTION
      }
    } else {
      return CREATIONS_PER_SECTION
    }
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
        if (currentSection.creations.length < this.creationsPerSection(currentSectionNumber)) {
          currentSection.creations.push(creation)
        } else {
          res.push(currentSection)
          currentSection = new CreationSection();
          currentSection.creations = [creation]
        }
      }
      if (currentSection.creations.length > 0 && currentSection.creations.length < this.creationsPerSection(currentSectionNumber)) {
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
      return res;
    }))

    return splitCreations
  }
}