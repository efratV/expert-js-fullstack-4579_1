import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BookRootObject } from './../models/book.model';
import { bookData } from './../data/books.data';

@Injectable()
export class BookService {

    constructor(private myHttpClient: HttpClient) { }

    getBooksInfo(): BookRootObject {

        return bookData;
    }


}