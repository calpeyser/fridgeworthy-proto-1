import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-creator-join',
  templateUrl: './creator-join.component.html',
  styleUrls: ['./creator-join.component.css']
})
export class CreatorJoinComponent implements OnInit {
  @Input() visible : boolean;

  constructor() { }

  ngOnInit() {
  }

}