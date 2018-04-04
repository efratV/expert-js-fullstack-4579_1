import { Component, OnInit } from '@angular/core';
import {BookService} from './../shared/services/books.service';
import {Book} from './../shared/models/book.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  bookList:Book[];
  constructor(private myBookService:BookService) { }

  ngOnInit() {
          this.bookList=this.myBookService.getBooksInfo().items; 
  }

}
