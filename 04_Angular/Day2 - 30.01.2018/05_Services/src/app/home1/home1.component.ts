import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/services/categories.service';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  categories: string[];
count:number;
  // Declaring the needed services: 
  constructor( private categoriesService: CategoriesService) { }

  ngOnInit(): void {

     
      // Using our custom service: 
      this.categories = this.categoriesService.getCategories();
      this.count = this.categoriesService.getCategoriesCounter();

  }


  counter=1;

  onClickAdd():void{
    this.count =this.categoriesService.addCategory(`Our New Category ${this.counter++}`);
  }
}
