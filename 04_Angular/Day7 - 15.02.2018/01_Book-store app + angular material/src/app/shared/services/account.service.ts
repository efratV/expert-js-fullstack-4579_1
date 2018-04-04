import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginUser, User } from './../models/account-models/index';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';

@Injectable()
export class AccountService {
  userEventEmitter: EventEmitter<User> = new EventEmitter<User>();
  globalUser: User = new User();
  isLogedIn = { state: false };
  constructor() {
    this.userEventEmitter.subscribe((x) => {
      this.isLogedIn.state = x.fullName != 'Guest';
    })
  }
  login({ userName, userPassword }: LoginUser): Observable<boolean> {

    if (userName !== 'Moshiko') {
      //Simulate a failed login to display the error
      return _throw('Invalid username or password');
    }
    this.globalUser.fullName = userName;
    this.userEventEmitter.emit(this.globalUser);
    return of(true);
  }

  logout(): Observable<boolean>{
    try {
      this.isLogedIn.state=false;
      this.globalUser.fullName = "Guest";
      this.globalUser.userUrlAvatar = "./../assets/images/profile.png";
      this.userEventEmitter.emit(this.globalUser);
      return of(true);
    }
    catch{
      return of(false);
    }
  }
}