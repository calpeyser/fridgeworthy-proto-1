import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Creation } from '../creation/creation';

@Component({
  selector: 'app-creation-thumbnail',
  templateUrl: './creation-thumbnail.component.html',
  styleUrls: ['./creation-thumbnail.component.css']
})
export class CreationThumbnailComponent implements OnInit {
  @Input() creation : Creation;

  thumbnailUrl : SafeUrl

  constructor(private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.thumbnailUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://img.youtube.com/vi/" + this.creation.youtube_id + "/0.jpg")
  }

}