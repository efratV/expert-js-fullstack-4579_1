import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BookRootObject,Book } from './../models/book.model';
import { bookData } from './../data/books.data';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookService {

    constructor(private myHttpClient: HttpClient) { }

    getBooksInfo():Observable<BookRootObject> {

        return of(bookData);
    }


    getBookInfo(index:number): Observable<Book> {
        
        return of(bookData.items[index]);
    }


}