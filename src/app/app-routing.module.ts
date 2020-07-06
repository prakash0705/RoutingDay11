import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ProductComponent} from "./product/product.component";
import {ProductEditComponent} from "./product-edit/product-edit.component";


const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"product",
    component: ProductComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"register/login",
    component:LoginComponent
  },
  {
    path:"product/edit",
    component:ProductEditComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
