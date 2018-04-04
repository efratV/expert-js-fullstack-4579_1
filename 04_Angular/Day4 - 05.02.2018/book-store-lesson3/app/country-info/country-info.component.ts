import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';
import {CountryBasic} from './../shared/models/countryBasic.model';
import {viewState} from './../shared/global-config/encapsulation'

export let a=ViewEncapsulation.None;
@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css'], 
  encapsulation:viewState
})
export class CountryInfoComponent implements OnInit {

 @Input("country") currentCountry:CountryBasic;

  constructor() { }

  ngOnInit() {
  }

}
