import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];
    fontSize = 20;
    clickedImageSource: string;

    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.productsService.getProducts().subscribe(products => this.products = products, error => alert(error.statusText));
    }

    showClickedImage(imageSource: string): void {
        this.clickedImageSource = imageSource;
    }

    showAveragePrice(): void {
        let sum = 0;
        this.products.forEach(p => { sum += p.unitPrice });
        let avg = Math.round(sum / this.products.length * 100) / 100;
        alert("Average Price: " + avg);
    }
}