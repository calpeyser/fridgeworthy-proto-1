import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-viewer-join',
  templateUrl: './viewer-join.component.html',
  styleUrls: ['./viewer-join.component.css']
})
export class ViewerJoinComponent implements OnInit {
  @Input() visible : boolean;
  @ViewChild('dismissButton') dismissButton : ElementRef;

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
    this.dismissButton.nativeElement.click()
  }

}