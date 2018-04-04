import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { YearSlogenPipe } from './shared/pipes/year-slogen.pipe';
import { ColoredDirective } from './shared/directives/colored.directive';
import { SeasonDirective } from './shared/directives/season.directive';

@NgModule({

    imports: [
		BrowserModule
	],

    declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		FooterComponent, 
        YearSlogenPipe,
		ColoredDirective, // Declare ColoredDirective as part of the AppModule.
		SeasonDirective // Declare SeasonDirective as part of the AppModule.
	],

    providers: [],
    
    bootstrap: [AppComponent]
})
export class AppModule { }