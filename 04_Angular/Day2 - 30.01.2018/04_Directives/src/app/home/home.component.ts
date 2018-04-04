import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent { 
    currentDate = new Date();
    discount = 10;
    categories = ["Beverages", "Condiments", "Confections", "Dairy Products", "Grains/Cereals", "Meat/Poultry", "Produce", "Seafood"];
}