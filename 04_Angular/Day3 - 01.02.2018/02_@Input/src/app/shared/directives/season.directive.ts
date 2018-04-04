import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';

@Directive({
    selector: '[afSeason]'
})
export class SeasonDirective implements OnInit {

    @Input("afSeason") season: string;

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

    ngOnInit(): void {
        if (this.nowIsTheSeason()) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
        else {
            this.viewContainer.clear();
        }
    }

    private nowIsTheSeason(): boolean {
        let month: number = new Date().getMonth() + 1;
        switch(this.season) {
            case "spring": return month >= 4 && month <= 5;
            case "summer": return month >= 6 && month <= 9;
            case "autumn": return month >= 10 && month <= 11;
            case "winter": month == 12 || month >=1 && month <= 3;
            default: false;
        }
    }
}