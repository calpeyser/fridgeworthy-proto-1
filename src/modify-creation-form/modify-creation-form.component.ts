import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Category } from '../creation/creation';

@Component({
  selector: 'app-modify-creation-form',
  templateUrl: './modify-creation-form.component.html',
  styleUrls: ['./modify-creation-form.component.css']
})
export class ModifyCreationFormComponent implements OnInit {
  categories = Category

  creationForm = new FormGroup({
    youtubeLink: new FormControl(''),
    category: new FormControl(Category.values()),
    description: new FormControl(''),
})

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
  }

}
