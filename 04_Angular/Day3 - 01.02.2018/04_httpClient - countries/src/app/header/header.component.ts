import { Component,Output,EventEmitter } from '@angular/core';
import {User} from './../shared/models/user.model';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent { 

    @Output() onRegister:EventEmitter<string>=new EventEmitter<string>();
    @Output() onLogin:EventEmitter<string>=new EventEmitter<string>();

    userInfo=new User("Guest","/assets/images/guest.png");


    onLoginClick():void{
        this.onLogin.emit("login");
    }

    onRegisterClick():void{
        this.onRegister.emit("register");
    }
}