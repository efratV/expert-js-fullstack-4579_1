
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {AccountService} from './../shared/services/account.service';
import { LoginUser, User } from './../shared/models/account-models/index';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  loginUser:LoginUser;

  constructor(private accountService:AccountService,
              private fb: FormBuilder) {
                this.createForm();
              }

  ngOnInit() {}
  
  createForm() {
    this.loginForm = this.fb.group({
      userName: ['Moshiko',LoginUser.userNameValidators],
      userPassword: ['123456',LoginUser.userPasswordValidators]
    });
  }

  changeUser(){
    console.log("this.loginForm",this.loginForm.value);
    this.accountService.userEventEmitter.emit(new User(this.loginForm.value.userName,""));
  }
}
