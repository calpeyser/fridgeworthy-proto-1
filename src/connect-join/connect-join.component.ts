import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connect-join',
  templateUrl: './connect-join.component.html',
  styleUrls: ['./connect-join.component.css']
})
export class ConnectJoinComponent implements OnInit {
  @Input() visible : boolean;

  constructor() { }

  ngOnInit() {
  }

}