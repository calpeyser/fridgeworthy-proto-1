import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'
import { map, flatMap } from 'rxjs/operators'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';

import { Creation } from '../creation/creation';
import { Creator } from '../creator/creator';
import * as CreationSelectors from '../creation/creation.selector';
import * as CreatorSelectors from '../creator/creator.selector';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creation-page.component.html',
  styleUrls: ['./creation-page.component.css']
})
export class CreationPageComponent implements OnInit {
  id : String;
  creation : Observable<Creation>
  creator : Observable<Creator>
  creationUrl : Observable<SafeUrl>

  constructor(
    private store : Store,
    private route : ActivatedRoute,
    private sanitizer : DomSanitizer,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.creation = this.store.pipe(select(CreationSelectors.selectCreationById, { creationId: this.id }))
      this.creator = this.creation.pipe(flatMap(cr => {
        return this.store.pipe(select(CreatorSelectors.selectCreationById, {creatorId : cr.creator_id}))
      }))      

      this.creationUrl = this.creation
          .pipe(map(c => this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + c.youtube_id)))
    })
  }
}