import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductNameCustomPipe } from './customPipe/product-name-custom.pipe';
import { HighlightDirective } from './customDirective/highlight/highlight.directive';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { RouteModule } from './route.module';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { BlogComponent } from './blog/blog/blog.component';
import { FormComponent } from './formExample/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductNameCustomPipe,
    HighlightDirective,
    ProductComponent,
    CustomerComponent,
    ProductDetailsComponent,
    BlogComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouteModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
