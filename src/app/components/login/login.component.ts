import { Component } from '@angular/core';
import { FormBuilder, FormControl,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

   hide = true

  loginForm: FormGroup;
  constructor(private readonly fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [],      
      password: []
    });
  }

  submitLogin(){
    console.log("Login Success!!")
  }
}