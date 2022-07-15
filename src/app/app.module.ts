import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {MatInputModule} from '@angular/material/input'; //input
import {MatToolbarModule} from '@angular/material/toolbar'; //toolbar
import {MatButtonModule} from '@angular/material/button'; //button
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // pt verificare email
import {MatFormFieldModule} from '@angular/material/form-field';
import { routingcComponents } from './app-routing.module';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  //comp create de noi
  declarations: [
    AppComponent,
    routingcComponents,
    NavbarComponent,
    ShoppingCartComponent,
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
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    FlexLayoutModule
  ],
  //servicii
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
