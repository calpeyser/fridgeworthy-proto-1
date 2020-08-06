import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Store, select } from '@ngrx/store';

import { Creation } from '../creation/creation';
import * as CreationSelectors from '../creation/creation.selector';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creation-page.component.html',
  styleUrls: ['./creation-page.component.css']
})
export class CreationPageComponent implements OnInit {
  id : Number;
  creation : Observable<Creation>
  creationUrl : Observable<SafeUrl>

  constructor(
    private store : Store,
    private route : ActivatedRoute,
    private sanitizer : DomSanitizer,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'))
      this.creation = this.store.pipe(select(CreationSelectors.selectCreationById, { creationId: this.id }))

      this.creationUrl = this.creation
          .pipe(map(c => this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + c.youtube_id)))
    })
  }
}