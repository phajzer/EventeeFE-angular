import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyFormComponent } from './currency-form/currency-form.component';
import { CurrencyHistoryComponent } from './currency-history/currency-history.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CurrencyFormComponent,
    CurrencyHistoryComponent,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
