import { Component, OnInit, Input } from '@angular/core';
import { PrimaryComment, Comment } from '../creation/creation';
import { Store } from '@ngrx/store';

import * as ComponentActions from './primary-comment.actions';

@Component({
  selector: 'app-primary-comment',
  templateUrl: './primary-comment.component.html',
  styleUrls: ['./primary-comment.component.css']
})
export class PrimaryCommentComponent implements OnInit {
  @Input() primaryComment : PrimaryComment;
  @Input() primaryCommentIndex : number;
  @Input() creationId : Number;

  replyButtonClicked = false 

  constructor(private store : Store) { }

  onReplyButtonClicked() {
    this.replyButtonClicked = true
  }

  ngOnInit() {
  }

  commentIsSubmitted(event : any) {
    var submittedComment : Comment = event
    this.store.dispatch(ComponentActions.add_reply({
      'creationId': this.creationId,
      'primaryCommentIndex': this.primaryCommentIndex,
      'reply': submittedComment
    }))
    this.replyButtonClicked = false
  }
}