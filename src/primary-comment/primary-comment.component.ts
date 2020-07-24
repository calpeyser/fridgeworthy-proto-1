import { Component, OnInit, Input } from '@angular/core';
import { CreationService } from '../creation/creation.service';
import { PrimaryComment, Comment } from '../creation/creation';

@Component({
  selector: 'app-primary-comment',
  templateUrl: './primary-comment.component.html',
  styleUrls: ['./primary-comment.component.css']
})
export class PrimaryCommentComponent implements OnInit {
  @Input() primaryComment : PrimaryComment;
  @Input() primaryCommentIndex : number;
  @Input() creationId : String;

  replyButtonClicked = false 

  constructor(private creationService : CreationService) { }

  onReplyButtonClicked() {
    this.replyButtonClicked = true
  }

  ngOnInit() {
  }

  commentIsSubmitted(event : any) {
    var submittedComment : Comment = event
    this.creationService.addReplyToPrimaryComment(this.creationId, this.primaryCommentIndex, submittedComment)
    this.replyButtonClicked = false
  }
}