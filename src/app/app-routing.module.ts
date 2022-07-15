import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'products', component:ProductsComponent},
  {path:'shoppingCart', component:ShoppingCartComponent},
  {path:'', redirectTo:"/home", pathMatch:"full"},
  {path:'**',pathMatch:'full', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcComponents = [ShoppingCartComponent,HomeComponent,PageNotFoundComponent,LoginComponent,ProductsComponent]