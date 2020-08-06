import { Component, OnInit } from '@angular/core';
import { FeedMode } from '../netflix-feed/netflix-feed.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  category : String;
  modes = FeedMode;

  constructor() { }

  ngOnInit() {
  }

}