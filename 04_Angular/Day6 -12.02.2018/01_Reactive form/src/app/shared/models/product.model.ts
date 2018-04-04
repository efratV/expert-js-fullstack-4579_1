import { ValidatorFn } from "@angular/forms";
import { Val } from "../validations/val";

export class Product {

    constructor(public productID: number = 0, public productName: string = "", public unitPrice: number = 0, public unitsInStock: number = 0, public unitsOnOrder: number = 0) { }

    // productName validators:
    static get productNameValidators(): ValidatorFn[] {
        return [
            Val.required("Missing product name."),
            Val.minLength(4, "Product name can't be shorter than 4 chars."),
            Val.maxLength(20, "Product name can't exceeds 20 chars.")
        ];
    }

    // unitPrice validators:
    static get unitPriceValidators(): ValidatorFn[] {
        return [Val.required(), Val.nonNegative()]; // Default messages.
    }

    // unitsInStock validators:
    static get unitsInStockValidators(): ValidatorFn[] {
        return [Val.nonNegative()]; // Note: we can also return back a ValidatorFn type (non array) and it will work but it'll break the uniformity of those functions.
    }

    // unitsOnOrder validators:
    static get unitsOnOrderValidators(): ValidatorFn[] {
        return [Val.nonNegative()];
    }
}