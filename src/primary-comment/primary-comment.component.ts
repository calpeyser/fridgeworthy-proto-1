import { Component, OnInit, Input } from '@angular/core';
import { PrimaryComment } from '../creation/creation';

@Component({
  selector: 'app-primary-comment',
  templateUrl: './primary-comment.component.html',
  styleUrls: ['./primary-comment.component.css']
})
export class PrimaryCommentComponent implements OnInit {
  @Input() primaryComment : PrimaryComment;

  constructor() { }

  ngOnInit() {
  }

}