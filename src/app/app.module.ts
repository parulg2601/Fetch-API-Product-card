import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { CardComponent } from './services/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './services/navbar/navbar.component';

// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    CardComponent,
    NavbarComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // FormsModule,
    // ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
