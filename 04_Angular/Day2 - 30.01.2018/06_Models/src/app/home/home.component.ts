import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CategoriesService } from '../shared/services/categories.service';
import { Category } from '../shared/models/category.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit { 

    currentDate = new Date();
    discount = 10;

    // Using the Model:
    categories: Category[];

    constructor(private titleService: Title, private categoriesService: CategoriesService) { }

    ngOnInit(): void {
        this.titleService.setTitle("Northwind | Home");
        this.categories = this.categoriesService.getCategories();
    }
}