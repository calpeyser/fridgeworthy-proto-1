import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-creator-join',
  templateUrl: './creator-join.component.html',
  styleUrls: ['./creator-join.component.css']
})
export class CreatorJoinComponent implements OnInit {
  @Input() visible : boolean;

  joinForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    description: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    var message = "Submitted, first name: " + this.joinForm.value['firstName']

    alert(message)
  }
}