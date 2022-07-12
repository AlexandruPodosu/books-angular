import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatInputModule} from '@angular/material/input'; //input
import {MatToolbarModule} from '@angular/material/toolbar'; //toolbar
import {MatButtonModule} from '@angular/material/button'; //button
import {MatIconModule} from '@angular/material/icon';
import { ProductsComponent } from './products/products.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // pt verificare email
import {MatFormFieldModule} from '@angular/material/form-field'; // pt parola 


@NgModule({
  //comp create de noi
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProductsComponent
  ],
  //module importante din material
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  //servicii
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
