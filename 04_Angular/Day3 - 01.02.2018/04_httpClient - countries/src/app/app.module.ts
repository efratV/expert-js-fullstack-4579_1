import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {CountryService} from './shared/services/country.service'
@NgModule({

    imports: [
		BrowserModule,
		FormsModule,
		HttpClientModule
	],

    declarations: [
		AppComponent,
		HeaderComponent,
		HomeComponent,
		FooterComponent,
		RegisterFormComponent,
		LoginFormComponent
	],

    providers: [CountryService],
    
    bootstrap: [AppComponent]
})
export class AppModule { }