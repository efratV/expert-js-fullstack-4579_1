import { Component, OnInit ,Input} from '@angular/core';
import { CountryBasic} from '../shared/models/countryBasic.model';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.css']
})
export class CountryInfoComponent implements OnInit {

  @Input("country") currentCountry:CountryBasic;
  
    constructor() { }
  
    ngOnInit() {
    }
  
}
