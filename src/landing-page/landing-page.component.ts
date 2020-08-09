import { Component, OnInit } from '@angular/core';
import { FeedMode } from '../netflix-feed/netflix-feed.component';
import { Category } from '../creation/creation';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  categories = Category;
  modes = FeedMode;

  constructor() { }

  ngOnInit() {
  }

}