import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appColored]'
})
export class ColoredDirective implements OnInit {

    @Input("appColored") color: string;

    constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

    ngOnInit(): void {
        if (!this.color) {
            this.color = this.getRandomColor();
        }
        this.renderer2.setStyle(this.elementRef.nativeElement, "color", this.color);
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.renderer2.setStyle(this.elementRef.nativeElement, "color", "yellow");
    }
    @HostListener("mouseleave") onMouseLeave() {
        this.renderer2.setStyle(this.elementRef.nativeElement, "color", this.color);
    }

    private getRandomColor(): string {
        let red: number = Math.floor(256 * Math.random());
        let green: number = Math.floor(256 * Math.random());
        let blue: number = Math.floor(256 * Math.random());
        let color: string = `rgb(${red},${green},${blue})`;
        return color;
    }
}