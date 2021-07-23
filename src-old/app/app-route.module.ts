import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ RouterModule ,Routes} from '@angular/router'; 
import { ProductComponent } from './product/product.component';
import {CustomerComponent} from './customer/customer.component';

const routeConfig:Routes=[
  {path:'product',component:ProductComponent},
  {path:'customer',component:CustomerComponent},
  {path: '',   redirectTo: '/product', pathMatch: 'full' }, 
  { path: '**',  redirectTo: '/customer', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routeConfig)
  ],
  exports: [RouterModule]
})
export class AppRouteModule { }
