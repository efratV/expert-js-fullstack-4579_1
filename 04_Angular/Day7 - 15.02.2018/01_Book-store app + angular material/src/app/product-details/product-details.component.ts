import { Component, OnInit } from '@angular/core';
import {BookService} from './../shared/services/books.service';
import {Book} from './../shared/models/book.model';
import { Router,ActivatedRoute } from '@angular/router';
import {User} from './../shared/models/account-models/index';
import {AccountService} from './../shared/services/account.service';


 
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  book:Book;
  isLogedIn;

  constructor(private myBookService:BookService,
              private router:Router,
              private route:ActivatedRoute,
              private accountService:AccountService) { }

  ngOnInit() {
this.isLogedIn= this.accountService.isLogedIn;
    this.route.params.subscribe(params => 
      this.myBookService.getBookInfo(params.id).subscribe((x)=>{
        this.book=x;
      }));

           
  }

  getAuthorList():string {
    if (!this.book.volumeInfo.authors || !this.book.volumeInfo.authors.length) {
      return 'Author Unknown';
    }
    switch (this.book.volumeInfo.authors.length) {
      case 1:
        return this.book.volumeInfo.authors[0];
      case 2:
        return this.book.volumeInfo.authors.join(' and ');
      default:
        const last = this.book.volumeInfo.authors[this.book.volumeInfo.authors.length - 1];
        const remaining = this.book.volumeInfo.authors.slice(0, -1);
        return `${remaining.join(', ')}, and ${last}`;
    }
  }
  goBack(){
    this.router.navigate([`/products`]);
  }

}
