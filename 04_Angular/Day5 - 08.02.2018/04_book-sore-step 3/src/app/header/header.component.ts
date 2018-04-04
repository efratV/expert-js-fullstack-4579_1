import { Component } from '@angular/core';
import {User} from './../shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  userInfo=new User("Guest","./../assets/images/profile.png");

}
