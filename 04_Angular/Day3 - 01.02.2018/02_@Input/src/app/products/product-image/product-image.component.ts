import { Component, Input } from "@angular/core";

@Component({
    selector: "af-product-image",
    templateUrl: "./product-image.component.html",
    styleUrls: ["./product-image.component.css"]
})
export class ProductImageComponent {

    // @Input() enables to send a value from the containing Component:
    @Input() imageSource: string;
}