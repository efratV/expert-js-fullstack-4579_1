import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormControl } from "@angular/forms";
import { Product } from "../../shared/models/product.model";

// There are three techniques for creating forms:
// 1. Template-Driven Forms.
//    This is not recommended cause all is done in the HTML template.
// 2. Reactive Forms.
//    This is the recommended way (this example).
// 3. Dynamic Forms.
//    Relay on Reactive Forms, but creating the control dynamically.
//    This technique is good when the controls specification are loaded from database.

@Component({
    selector: 'af-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

    // A group of FormControls (which is a <form> element):
    productForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { 
        //this.createForm1();
        this.createForm2();
    }

    // Create FormGroup using FormControls:
    private createForm1(): void {
        let productNameControl = new FormControl("", Product.productNameValidators);
        let unitPriceControl = new FormControl("", Product.unitPriceValidators);
        let unitsInStockControl = new FormControl("", Product.unitsInStockValidators);
        let unitsOnOrderControl = new FormControl("", Product.unitsOnOrderValidators);
        this.productForm = new FormGroup({ 
            productNameControl, 
            unitPriceControl, 
            unitsInStockControl, 
            unitsOnOrderControl 
        });
    }

    // Same as above, but using the FormBuilder syntactic sugar:
    private createForm2(): void {
        this.productForm = this.formBuilder.group({
            productNameControl: ["test-product", Product.productNameValidators],
            unitPriceControl: ["", Product.unitPriceValidators],
            unitsInStockControl: ["", Product.unitsInStockValidators],
            unitsOnOrderControl: ["", Product.unitsOnOrderValidators]
        });
    }

    // "Send" to database:
    addProduct(): void {
        let product = new Product();
        product.productName = this.productForm.get("productNameControl").value;
        product.unitPrice = this.productForm.get("unitPriceControl").value;
        product.unitsInStock = this.productForm.get("unitsInStockControl").value;
        product.unitsOnOrder = this.productForm.get("unitsOnOrderControl").value;
        alert("Adding the product: " + JSON.stringify(product));
    }
}