import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PhoneNumberPipe } from './customPipe/phoneNumber/phone-number.pipe';
import { CustomerNumberPipe } from './customPipe/customerNumber/customer-number.pipe';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component'
import {AppRouteModule } from './app-route.module';
import { ProductDetailComponent } from './product/product-detail/product-detail.component'

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberPipe,
    CustomerNumberPipe,
    ProductComponent,
    CustomerComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
