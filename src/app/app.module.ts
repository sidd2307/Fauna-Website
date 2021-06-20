import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalcardsComponent } from './MyComponents/animalcards/animalcards.component';
import { CarddetailsComponent } from './MyComponents/carddetails/carddetails.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalcardsComponent,
    CarddetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
