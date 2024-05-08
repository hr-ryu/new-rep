import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { HeroesComponent } from './heroes/heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [
    //CommonModule,
    BrowserModule,
    FormsModule
  ],
  
  providers: [],
  bootstrap: [
    AppComponent,
    HeroesComponent
  ],
})
export class AppModule { }
