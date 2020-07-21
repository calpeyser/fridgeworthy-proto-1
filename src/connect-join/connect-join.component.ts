import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connect-join',
  templateUrl: './connect-join.component.html',
  styleUrls: ['./connect-join.component.css']
})
export class ConnectJoinComponent implements OnInit {
  @Input() visible : boolean;

  joinForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  })

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    var message = "Submitted, first name: " + this.joinForm.value['firstName']

    alert(message)
  }
}