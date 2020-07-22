import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../creation/creation';

@Component({
  selector: 'app-replies',
  templateUrl: './replies.component.html',
  styleUrls: ['./replies.component.css']
})
export class RepliesComponent implements OnInit {
  @Input() replies : Comment[];

  constructor() { }

  ngOnInit() {
  }

}