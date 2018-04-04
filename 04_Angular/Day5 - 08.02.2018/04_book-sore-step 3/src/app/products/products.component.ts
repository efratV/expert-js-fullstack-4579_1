import { Component, OnInit } from '@angular/core';
import {BookService} from './../shared/services/books.service';
import {Book} from './../shared/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  bookList:Book[];
  constructor(private myBookService:BookService,
              private router:Router) { }

  ngOnInit() {
          this.myBookService.getBooksInfo().subscribe((x)=>{
            this.bookList=x.items;
          }); 
  }

  showFullDetail(i:number){
    this.router.navigate([`/products/${i}`]);
  }
}
