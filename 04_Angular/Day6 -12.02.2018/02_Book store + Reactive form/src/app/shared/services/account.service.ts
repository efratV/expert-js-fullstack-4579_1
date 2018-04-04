import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LoginUser, User } from './../models/account-models/index';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AccountService { 
    userEventEmitter:EventEmitter<User>=new  EventEmitter<User>();
}