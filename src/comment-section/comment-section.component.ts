import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';

import { Creation, PrimaryComment } from '../creation/creation';
import * as ComponentActions from './comment-section.actions';


@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Input() creationId: Number;
  @Input() creation : Observable<Creation>;

  constructor(private store : Store) { 
  }

  ngOnInit() {
  }

  addDummyComments() {
    this.store.dispatch(ComponentActions.add_dummy_comments({
      'creationId' : this.creationId
    }))
  }

  commentIsSubmitted(event : any) {
    var submittedComment : PrimaryComment = {
      comment: event,
      replies: []
    }
    this.store.dispatch(ComponentActions.add_primary_comment({
      'creationId' : this.creationId,
      'comment' : submittedComment
    }))
  }
}