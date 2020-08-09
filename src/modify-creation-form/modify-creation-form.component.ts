import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';

import { Category } from '../creation/creation';
import * as ComponentActions from './modify-creation-form.actions';

@Component({
  selector: 'app-modify-creation-form',
  templateUrl: './modify-creation-form.component.html',
  styleUrls: ['./modify-creation-form.component.css']
})
export class ModifyCreationFormComponent implements OnInit {
  @Input() creatorId : Number

  categories = Category

  creationForm = new FormGroup({
    youtubeLink: new FormControl(''),
    category: new FormControl(),
    title: new FormControl(''),
    description: new FormControl(''),
})

  constructor(private store : Store) { }

  ngOnInit() {
  }

  onSubmit() {
    const fullYoutubeLink : String = this.creationForm.controls['youtubeLink'].value
    const youtubeId = fullYoutubeLink.split("=")[1]

    var props = {
      'youtubeId': youtubeId,
      'title': this.creationForm.controls['title'].value,
      'category': this.creationForm.controls['category'].value,
      'description': this.creationForm.controls['description'].value,
      'creatorId': this.creatorId,
      'creationId': null
    }
    this.store.dispatch(ComponentActions.modify_creation(props))
    this.creationForm.reset()
    var jq : any = $('#createCreationModal')
    jq.modal("hide")
  }
}
