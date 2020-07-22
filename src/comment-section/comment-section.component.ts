import { Component, OnInit, Input } from '@angular/core';
import { Creation, PrimaryComment } from '../creation/creation';
import { CreationService } from '../creation/creation.servi'

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.css']
})
export class CommentSectionComponent implements OnInit {
  @Input() creation : Creation;

  constructor(private creationService : CreationService) { 
  }

  ngOnInit() {
    this.creation.comments = [];
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
      replies: [{
        author: 'author3',
        content: 'Yea, you\'re nuts',
      }, {
        author: 'author4',
        content: 'Guys, give him a break.'
      }],
    };
    var comment3 : PrimaryComment = {
      comment : {
        author: 'author1',
        content: 'I still think such and such',
      },
      replies: [],
    };

    this.creation.comments.push(comment1)
    this.creation.comments.push(comment2)
    this.creation.comments.push(comment3)
  }

  commentIsSubmitted(event : any) {
    var submittedComment : PrimaryComment = {
      comment: event,
      replies: []
    }
    this.creation.comments.push(submittedComment)
    this.updateCreation(this.creation)
  }

  updateCreation(creation : Creation) {
    this.creationService.updateCreation(creation.id, creation)
  }

}