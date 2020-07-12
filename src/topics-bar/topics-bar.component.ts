import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-topics-bar',
  templateUrl: './topics-bar.component.html',
  styleUrls: ['./topics-bar.component.css']
})
export class TopicsBarComponent implements OnInit {

  @Input() selectedCategory : String;
  @Output() selectedCategoryChange = new EventEmitter<String>();

  constructor() { }

  ngOnInit() {
  }

  selectCategory(cat : String) {
    this.selectedCategory = cat;
    this.selectedCategoryChange.emit(this.selectedCategory);
  }

}