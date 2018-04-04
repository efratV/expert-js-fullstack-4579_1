import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { BookService } from './../shared/services/books.service';
import { Book } from './../shared/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  currentFilter: string;
  searching=false;
  bookList: Book[];
  constructor(private myBookService: BookService,
    private router: Router) { }

  ngOnInit() {
    this.myBookService.getBooksInfo().subscribe((x) => {
      this.bookList = x.items;
    });

  }

  searchBooks(currentFilter: string) {

    //this.bookFilterRef.nativeElement.value="Zohar";  --> works, but not recommended to use
   
 
    this.myBookService.getBooksInfoByQuery(this.currentFilter).subscribe((x) => {
      this.bookList = x.items;
      this.searching=false;
    },
    (error)=>{
      console.log(error);
      this.searching=false;
    }
  );
  }

 
}
