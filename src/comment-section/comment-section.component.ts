import { Component, OnInit, Input } from '@angular/core';
import { PrimaryComment, Comment } from '../creation/creation';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Input() primaryComments : PrimaryComment[] = [];

  constructor() { 
  }

  ngOnInit() {
    this.primaryComments = [];
    var comment1 : PrimaryComment = {
      comment : {
        author: 'author1',
        content: 'I think such and such',
      },
      replies: [],
    };
    var comment2 : PrimaryComment = {
      comment : {
        author: 'author2',
        content: 'oh yea? well that is crazy',
      },
      replies: [],
    };
    var comment3 : PrimaryComment = {
      comment : {
        author: 'author1',
        content: 'I still think such and such',
      },
      replies: [],
    };

    this.primaryComments.push(comment1)
    this.primaryComments.push(comment2)
    this.primaryComments.push(comment3)
  }

  commentIsSubmitted(event : any) {
    var submittedComment : PrimaryComment = {
      comment: event,
      replies: []
    }
    this.primaryComments.push(submittedComment)
  }

}