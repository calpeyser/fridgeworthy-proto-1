import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  @ViewChild('dismissButton') dismissButton : ElementRef;

  errorMessage : string;

  loginForm = new FormGroup({
    email_username: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.signIn(
      this.loginForm.value['email_username'],
      this.loginForm.value['password'])
      .then(res => {
        this.dismissButton.nativeElement.click()
      })
      .catch(error => {
        this.errorMessage = error.message;
      })
  }

}