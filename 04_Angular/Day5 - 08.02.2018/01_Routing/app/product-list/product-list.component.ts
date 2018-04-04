import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';
import { Product } from '../shared/models/product.model';

@Component({
    selector: 'jb-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products: Product[];
    fontSize = 20;
    clickedImageSource: string;

    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.products = this.productsService.getProducts();
    }

    showAveragePrice(): void {
        let sum = 0;
        for(let i = 0; i < this.products.length; i++) {
            sum += this.products[i].unitPrice;
        }
        let avg = sum / this.products.length;
        alert("Average Price: " + avg);
    }

    showImage(imageSource: string): void {
        // 5. שימוש במידע שדווח ע"י הארוע
        this.clickedImageSource = imageSource;
    }
}