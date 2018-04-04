import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BookRootObject, Book } from './../models/book.model';
import { bookData } from './../data/books.data';
import { of } from 'rxjs/observable/of';

@Injectable()
export class BookService {

    constructor(private httpClient: HttpClient) { }


    getBooksInfoByQuery(query: string = "a"): Observable<BookRootObject> {

        return this.httpClient.get<BookRootObject>(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    }


    getBooksInfo(): Observable<BookRootObject> {
        return of(bookData);
    }


    getBookInfo(id: string): Observable<Book> {
        return this.httpClient.get<Book>(`https://www.googleapis.com/books/v1/volumes/${id}`);
    }


}