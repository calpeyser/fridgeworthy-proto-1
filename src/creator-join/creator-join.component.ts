import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { User, UserType, AuthService } from '../auth/auth.service';


@Component({
  selector: 'app-creator-join',
  templateUrl: './creator-join.component.html',
  styleUrls: ['./creator-join.component.css']
})
export class CreatorJoinComponent implements OnInit {
  @Input() visible : boolean;
  @ViewChild('dismissButton') dismissButton : ElementRef;

  joinForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    description: new FormControl('', Validators.required),
  })

  getFormValidationErrors() {
    Object.keys(this.joinForm.controls).forEach(key => {
  
    const controlErrors: ValidationErrors = this.joinForm.get(key).errors;
    if (controlErrors != null) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    }
  
  passwordErrors() {
    return this.joinForm.get("password").errors
  }

  emailErrors() {
    return this.joinForm.get("email").errors
  }

  constructor(private auth : AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    const user : User = {
      uid : null,
      username : this.joinForm.value['username'],
      firstName : this.joinForm.value['firstName'],
      lastName : this.joinForm.value['lastName'],
      email: this.joinForm.value['email'],
      description: this.joinForm.value['description'],
      type: UserType.CREATOR,
    }
    const password : string = this.joinForm.value['password']
    this.auth.signUp(user, password)
    this.dismissButton.nativeElement.click()
  }
}