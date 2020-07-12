import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Creator } from './creator';
import { CREATOR_LIST } from './creator_database';

@Injectable({
  providedIn: 'root',
})
export class CreatorService {

  constructor() { }

  getCreatorByName(name : String) : Observable<Creator> {
    const creator : Creator = CREATOR_LIST.filter(creator => {
      return creator.name == name;
    })[0]
    return of(creator)
  }
}