import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 

    title="";

    onLoginOrRegister(str:string):void{
        this.title=str;
    }

}