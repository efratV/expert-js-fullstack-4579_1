import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/models/product.model';

@Component({
    selector: 'app-product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product: Product;

    constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => this.setProduct(params.id));
    }

    setProduct(id: number): void {
        this.productsService.getProduct(id).subscribe(product => this.product = product, error => alert(error.statusText));
    }

    goBack(): void {
        this.router.navigate(["/products"]);
    }
}