import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { BlogComponent } from './blog/blog/blog.component';

const routesConfig: Routes = [
  {path: 'product', component: ProductComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'blog', component: BlogComponent},
  {path: '',   redirectTo: '/blog', pathMatch: 'full' }, 
  { path: '**',  redirectTo: '/customer', pathMatch: 'full'}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routesConfig)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
