import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { CreationService } from '../creation/creation.service';
import { Creation } from '../creation/creation';

@Component({
  selector: 'app-creation-page',
  templateUrl: './creation-page.component.html',
  styleUrls: ['./creation-page.component.css']
})
export class CreationPageComponent implements OnInit {
  id : String;
  creation : Observable<Creation>
  creationUrl : Observable<SafeUrl>

  constructor(
    private creationService : CreationService,
    private route : ActivatedRoute,
    private sanitizer : DomSanitizer,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.creation = this.creationService.getCreationByID(this.id)
      this.creationUrl = this.creation
          .pipe(map(c => this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + c.youtube_id)))
    })
  }
}