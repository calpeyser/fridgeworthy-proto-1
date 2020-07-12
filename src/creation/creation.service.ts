import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Creation } from './creation';
import { SILLY_ANIMATION_VIDEOS } from './silly_animation_videos';

@Injectable({
  providedIn: 'root',
})
export class CreationService {

  constructor() { }

  getCreationByYouTubeID(yid : String) : Observable<Creation> {
    const creation : Creation = SILLY_ANIMATION_VIDEOS.filter(video => {
      return video.youtube_id == yid;
    })[0];
    return of(creation);
  }

  getCreationsByCategory(category : String) : Observable<Creation[]> {
    if (category == null || category == '') {
      return of(SILLY_ANIMATION_VIDEOS)
    }
    const filteredVideos : Creation[] = SILLY_ANIMATION_VIDEOS.filter(video => {
      return video.category == category;
    })
    return of(filteredVideos);
  }

  getCreationsByCreatorName(creatorName : String) : Observable<Creation[]> {
    if (creatorName == null || creatorName == '') {
      return of(SILLY_ANIMATION_VIDEOS)
    }
    const filteredVideos : Creation[] = SILLY_ANIMATION_VIDEOS.filter(video => {
      return video.creator == creatorName
    })
    return of(filteredVideos)
  }

}