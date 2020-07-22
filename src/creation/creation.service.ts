import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, of, pipe } from 'rxjs'
import { map, single } from 'rxjs/operators';

import { Creation, PrimaryComment } from './creation';
import { SILLY_ANIMATION_VIDEOS } from './silly_animation_videos';

@Injectable({
  providedIn: 'root',
})
export class CreationService {
  creationsSubject : BehaviorSubject<Creation[]> = new BehaviorSubject(SILLY_ANIMATION_VIDEOS)

  constructor() { 
    this.creationsSubject.subscribe(v => {
      console.log(v)
    })
  }

  getCreationByYouTubeID(yid : String) : Observable<Creation> {
    const result : Observable<Creation> = this.creationsSubject.pipe(map(creations => {
      return creations.filter(creation => {
        return creation.youtube_id == yid;
      })[0]
    }))
    return result
  }

  getCreationsByCategory(category : String) : Observable<Creation[]> {
    if (category == null || category == '') {
      return this.creationsSubject
    } else {
      const result : Observable<Creation[]> = this.creationsSubject.pipe(
        map(creations => {
          return creations.filter(creation => {
            return creation.category == category;
          })
        })
      )
      return result;
    }
  }

  getCreationsByCreatorName(creatorName : String) : Observable<Creation[]> {
    if (creatorName == null || creatorName == '') {
      return this.creationsSubject
    }
    else {
      const result : Observable<Creation[]> = this.creationsSubject.pipe(
        map(creations => {
          return creations.filter(creation => {
            return creation.creator == creatorName;
          })
        })
      )
      return result;
    }
  }

  updateCreation(id : String, newCreation : Creation) {
    var creations : Creation[] = this.creationsSubject.getValue()
    var to_replace = creations.find(creation => {
      creation.id == id;
    })
    var index = creations.indexOf(to_replace)
    creations[index] = newCreation
    this.creationsSubject.next(creations)
  } 

  addDummyComments(id: String) {
    var creations : Creation[] = this.creationsSubject.getValue()
    var to_replace = creations.find(creation => {
      creation.id = id;
    })
    var index = creations.indexOf(to_replace)

    to_replace.comments = [];
    var comment1 : PrimaryComment = {
      comment : {
        author: 'author1',
        content: 'I think such and such',
      },
      replies: [],
    };
    var comment2 : PrimaryComment = {
      comment : {
        author: 'author2',
        content: 'oh yea? well that is crazy',
      },
      replies: [{
        author: 'author3',
        content: 'Yea, you\'re nuts',
      }, {
        author: 'author4',
        content: 'Guys, give him a break.'
      }],
    };
    var comment3 : PrimaryComment = {
      comment : {
        author: 'author1',
        content: 'I still think such and such',
      },
      replies: [],
    };

    to_replace.comments.push(comment1)
    to_replace.comments.push(comment2)
    to_replace.comments.push(comment3)
    creations[index] = to_replace
    this.creationsSubject.next(creations)
  }

}