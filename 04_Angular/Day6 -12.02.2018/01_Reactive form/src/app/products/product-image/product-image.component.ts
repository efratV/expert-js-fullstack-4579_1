import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-product-image",
    templateUrl: "./product-image.component.html",
    styleUrls: ["./product-image.component.css"]
})
export class ProductImageComponent {
    @Input() imageSource: string;
    @Output() onImageClicked: EventEmitter<string> = new EventEmitter<string>();

    raiseOnImageClickedEvent(): void {
        this.onImageClicked.emit(this.imageSource);
    }
}