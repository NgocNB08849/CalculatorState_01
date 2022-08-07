import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule } from '@ngrx/store';
import { counterReducer } from './reducer/counter.reducer';
import { ButtonComponent } from './components/button/button.component';
import { CalculatorReducer } from './reducer/calculator.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: counterReducer, calcultor: CalculatorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
