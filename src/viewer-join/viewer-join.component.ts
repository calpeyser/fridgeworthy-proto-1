import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewer-join',
  templateUrl: './viewer-join.component.html',
  styleUrls: ['./viewer-join.component.css']
})
export class ViewerJoinComponent implements OnInit {
  @Input() visible : boolean;

  constructor() { }

  ngOnInit() {
  }

}