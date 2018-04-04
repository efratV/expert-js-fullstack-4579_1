import { NgModule, ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from "./products/product-details/product-details.component";
import { AddProductComponent } from "./products/add-product/add-product.component";

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'products/new', component: AddProductComponent }, // "Add Product" route (must be before :id, so the "new" word won't be considered as an id).
    { path: 'products/:id', component: ProductDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

const appRouter: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [appRouter]
})
export class AppRoutingModule { }