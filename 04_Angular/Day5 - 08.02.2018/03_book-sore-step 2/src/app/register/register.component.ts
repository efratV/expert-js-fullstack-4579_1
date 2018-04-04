import { Component, OnInit } from '@angular/core';
import { CountryService } from './../shared/services/country.service';
import { RegisterUser } from './../shared/models/registerUser.model';
import { CountryBasic } from './../shared/models/countryBasic.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  

  newUser=new RegisterUser();
  countryList:CountryBasic[];
  countryNamesList:string[];
  selectedCountry:CountryBasic;
  selectCountryMode=false;
  constructor(private countryService:CountryService) { }
 

  setCountryMode():void{
    this.selectCountryMode=!this.selectCountryMode;
  }

  setUserCountry(x:CountryBasic):void{
    this.setCountryMode();
    this.selectedCountry=x;
    this.newUser.country=x.name;
  }
  ngOnInit() {
    this.countryService.getCountries((res:string[])=>{this.countryNamesList=res});
    
    this.countryService.getCountriesInfo().subscribe(
      (res:CountryBasic[])=>{
        this.countryList=res;
        this.selectedCountry=res.length?res[0]:undefined;
      }
    );
  }


}
