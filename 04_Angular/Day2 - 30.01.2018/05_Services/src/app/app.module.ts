import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { YearSlogenPipe } from './shared/pipes/year-slogen.pipe';
import { ColoredDirective } from './shared/directives/colored.directive';
import { SeasonDirective } from './shared/directives/season.directive';
import { CategoriesService } from './shared/services/categories.service';
import { Home1Component } from './home1/home1.component';

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
		ColoredDirective,
		SeasonDirective,
		Home1Component
	],

    // Declaring CategoriesService to be created in the AppModule level.
    // This will create a singleton object to be used on all of the project.
    // Declaring it in another Module's "Providers" will create it for that Module only etc.
    // Declaring it in a Component's "providers" will create it for that Component only.
    providers: [
		CategoriesService
	],
    
    bootstrap: [AppComponent]
})
export class AppModule { }