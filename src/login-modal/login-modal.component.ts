import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  @ViewChild('loginModal') modal : ElementRef;

  constructor() { }

  ngOnInit() {
  }

}