import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { HomeComponent } from "./home/home.component";
import { AccountComponent } from "./account/account.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";

const appRoutes: Routes = [
    { path: "home", component: HomeComponent },
    {
        path: "account", component: AccountComponent, children: [
            { path: '', redirectTo: 'register', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
    {path:'products',component: ProductsComponent},
    { path: "products/:id", component: ProductDetailsComponent },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "**", component: HomeComponent }
];

const appRouter = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [appRouter]
})
export class AppRoutingModule { }