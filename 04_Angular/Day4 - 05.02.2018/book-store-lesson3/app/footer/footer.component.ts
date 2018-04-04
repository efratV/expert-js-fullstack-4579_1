import { Component ,ViewEncapsulation} from '@angular/core';
import {viewState} from './../shared/global-config/encapsulation'

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    encapsulation:viewState
})
export class FooterComponent {
    currentYear = new Date().getFullYear(); // To be interpolated.
}