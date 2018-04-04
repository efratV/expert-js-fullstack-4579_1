import { Component, OnInit } from '@angular/core';
import {RegisterUser} from './../shared/models/registerUser.model';
import {CountryService} from './../shared/services/country.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {


  newUser=new RegisterUser();
  countryList:Array<any>;
  constructor(private countryService:CountryService) { }


 
  ngOnInit() {

    let func=(res:Array<any>)=>{this.countryList=res};
    this.countryService.getCountries(func);

    
  }

}
