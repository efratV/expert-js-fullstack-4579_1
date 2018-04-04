import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

// Custom Attribute Directive - Influancing on an existing element.

// @Directive is an annotation for declaring a directive.
@Directive({
    selector: '[appColored]'
})
export class ColoredDirective implements OnInit {

    // Default property (Usage: <someElement appColored="green" ... />):
    @Input("appColored") color: string;
    
    constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

    ngOnInit(): void {
        
        // Set random color if color wasn't send:
        if(!this.color) {
            this.color = this.getRandomColor();
        }

        // Paint fore color: 
        this.renderer2.setStyle(this.elementRef.nativeElement, "color", this.color);

        // Note: 
        // 1. Following line will work fine on web, but not on native mobile or deskop running Angular app.
        //    Thus we need to use Renderer2:
        //    elementRef.nativeElement.style.color = this.getRandomColor();
        // 2. Renderer2 is an Angular 4 upgrade of Renderer (performance wise).
        // 3. We can use more @Input variables and send values to them. E.g: 
        //    @Input() bg: string; // Usage: <someElement appColored bg="blue" ... />
        // 4. The color property can also be a set property.
        //    In that case, we don't need the ngOnInit because this code can be inside the set property.
    }

    // Events: 
    /*
    parameters of HostListener:
    
    ===============================

    export interface HostListener {
    eventName?: string;
    args?: string[];
    }
    */ 

    //eventName="mouseenter" 
    @HostListener("mouseenter") onMouseEnter() {
        this.renderer2.setStyle(this.elementRef.nativeElement, "color", "yellow");
    }
    @HostListener("mouseleave") onMouseLeave() {
        this.renderer2.setStyle(this.elementRef.nativeElement, "color", this.getRandomColor());
    }

    private getRandomColor(): string {
        let red: number = Math.floor(256 * Math.random());
        let green: number = Math.floor(256 * Math.random());
        let blue: number = Math.floor(256 * Math.random());
        let color: string = `rgb(${red},${green},${blue})`;
        return color;
    }
}