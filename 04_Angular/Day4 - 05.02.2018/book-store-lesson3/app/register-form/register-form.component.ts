import { Component, OnInit } from '@angular/core';
import {RegisterUser} from './../shared/models/registerUser.model';
import {CountryBasic} from './../shared/models/countryBasic.model';
import {CountryService} from './../shared/services/country.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: []
})
export class RegisterFormComponent implements OnInit {


  newUser=new RegisterUser();
  countryList:CountryBasic[];
  countryNamesList:string[];
  constructor(private countryService:CountryService) { }


 
  ngOnInit() {
    this.countryService.getCountries((res:string[])=>{this.countryNamesList=res});
    
    this.countryService.getCountriesInfo().subscribe(
      (res:CountryBasic[])=>{this.countryList=res}
    );
  }

}
