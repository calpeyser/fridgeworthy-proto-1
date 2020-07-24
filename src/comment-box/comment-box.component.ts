import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Comment } from '../creation/creation';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent implements OnInit {
  @Output() submittedComment = new EventEmitter();

  commentForm = new FormGroup({
    content: new FormControl('')
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    var comment : Comment = {
      author: 'dummy_author',
      content: this.commentForm.value['content'],
    }
    this.submittedComment.emit(comment)
    this.commentForm.reset()
  }
}