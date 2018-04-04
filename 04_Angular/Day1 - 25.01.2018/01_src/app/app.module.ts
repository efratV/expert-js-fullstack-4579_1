import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';


@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    CatComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
