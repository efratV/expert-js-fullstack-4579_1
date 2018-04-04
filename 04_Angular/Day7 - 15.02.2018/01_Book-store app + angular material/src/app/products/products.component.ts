import { Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { BookService } from './../shared/services/books.service';
import { Book } from './../shared/models/book.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  @ViewChild("bookFilterInput") bookFilterRef: ElementRef;
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
    console.log(this.bookFilterRef.nativeElement.value);

    //this.bookFilterRef.nativeElement.value="Zohar";  --> works, but not recommended to use
    this.currentFilter = currentFilter;
    this.searching=true;
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

  showFullDetail(id: string) {
    this.router.navigate([`/products/${id}`]);
  }
}
