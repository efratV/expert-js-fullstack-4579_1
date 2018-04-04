import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { YearSlogenPipe } from './shared/pipes/year-slogen.pipe';
import { ColoredDirective } from './shared/directives/colored.directive';
import { SeasonDirective } from './shared/directives/season.directive';
import { CategoriesService } from './shared/services/categories.service';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductsService } from './shared/services/products.service';
import { ProductImageComponent } from './products/product-image/product-image.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import "rxjs/Rx";
import { AddProductComponent } from './products/add-product/add-product.component';
import { ErrorComponent } from './error/error.component';

@NgModule({

    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule, // Needed by the Reactive Forms
        RouterModule,
        AppRoutingModule
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent, 
        YearSlogenPipe,
        ColoredDirective,
        SeasonDirective,
        ProductListComponent,
        ProductImageComponent,
        PageNotFoundComponent,
        ProductDetailsComponent,
        AddProductComponent,
        ErrorComponent
    ],

    providers: [
        CategoriesService,
        ProductsService
    ],
    
    bootstrap: [AppComponent]
})
export class AppModule { }