import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { YearSlogenPipe } from './shared/pipes/year-slogen.pipe';
import { ShowDayPartPipe } from './shared/pipes/show-day-part.pipe';


@NgModule({

    imports: [
		BrowserModule
	],
   
    declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		FooterComponent,
		ShowDayPartPipe,
		YearSlogenPipe // Declare YearSlogenPipe as part of the AppModule.
	],

    providers: [],
    
    bootstrap: [AppComponent]
})
export class AppModule { }