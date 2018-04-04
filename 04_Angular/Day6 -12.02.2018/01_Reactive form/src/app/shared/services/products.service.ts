import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Product } from "../models/product.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductsService {

    constructor(private httpService: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this.httpService.get("/assets/api/products.json")
            .map((response: Product[]) => response)
            .do(products => console.log(products))
            .catch(error => Observable.throw(error));
    }
    
    getProduct(id: number): Observable<Product> {
        return this.httpService.get("/assets/api/products.json")
            .map((response: Product[]) => response.find(p => p.productID == id))
            .do(product => console.log(product))
            .catch(error => Observable.throw(error));
    }
}