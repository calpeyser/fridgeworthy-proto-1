import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../creation/creation';

@Component({
  selector: 'app-secondary-comment',
  templateUrl: './secondary-comment.component.html',
  styleUrls: ['./secondary-comment.component.css']
})
export class SecondaryCommentComponent implements OnInit {
  @Input() comment : Comment;

  constructor() { }

  ngOnInit() {
  }

}