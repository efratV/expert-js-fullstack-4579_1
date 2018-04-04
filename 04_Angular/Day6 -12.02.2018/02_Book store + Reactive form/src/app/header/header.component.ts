import { Component,OnInit } from '@angular/core';
import {User} from './../shared/models/account-models/index';
import {AccountService} from './../shared/services/account.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{


  constructor(private accountService:AccountService){}


  userInfo=new User("Guest","./../assets/images/profile.png");


  ngOnInit(){
    this.accountService.userEventEmitter.subscribe((x)=>{
        this.userInfo=x;
    })
  }
}
