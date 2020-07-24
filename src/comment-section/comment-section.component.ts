import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs'

import { Creation, PrimaryComment } from '../creation/creation';
import { CreationService } from '../creation/creation.service';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Input() creationId: String;
  @Input() creation : Observable<Creation>;

  constructor(private creationService : CreationService) { 
  }

  ngOnInit() {
  }

  addDummyComments(creation : Creation) {
    this.creationService.addDummyComments(creation.id)
  }

  commentIsSubmitted(event : any) {
    var submittedComment : PrimaryComment = {
      comment: event,
      replies: []
    }
    this.creationService.addCommentToCreation(this.creationId, submittedComment)
  }
}