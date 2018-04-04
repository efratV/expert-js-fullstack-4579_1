import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product.model';
import { ProductsService } from '../../shared/services/products.service';

@Component({
    selector: 'af-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];
    fontSize = 20;

    // Clicked image source property for binding to when image clicked:
    clickedImageSource: string;
    
    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.products = this.productsService.getProducts();
    }

    // The Event Handler (the CallBack function):
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