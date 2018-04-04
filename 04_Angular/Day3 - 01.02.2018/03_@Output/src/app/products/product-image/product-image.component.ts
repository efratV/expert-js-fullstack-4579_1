import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "af-product-image",
    templateUrl: "./product-image.component.html",
    styleUrls: ["./product-image.component.css"]
})
export class ProductImageComponent {
    @Input() imageSource: string;

    // Declaring an event. Must be declared with the @Output annotation:
    @Output() onImageClicked: EventEmitter<string> = new EventEmitter<string>();

    raiseOnImageClickedEvent(): void {
        
        // Raising the event - when user clickes the image:
        this.onImageClicked.emit(this.imageSource);
    }
}