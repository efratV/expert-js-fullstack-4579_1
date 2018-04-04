import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

    currentDate = new Date();
    discount = 10;
    categories: string[];
    count:number;
    // Declaring the needed services: 
    constructor(private titleService: Title, private categoriesService: CategoriesService) { }

    ngOnInit(): void {

        // Using the built-in service:
        this.titleService.setTitle("Northwind | Home");

        // Using our custom service: 
        this.categories = this.categoriesService.getCategories();
        this.count = this.categoriesService.getCategoriesCounter();
    }


    onClickUpdateCounter(){
        this.count = this.categoriesService.getCategoriesCounter();
    }
}