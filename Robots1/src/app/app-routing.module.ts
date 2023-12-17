import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailGuard } from './product-details/products-details/products-details.guard';

const routes: Routes = [{path:'welcome',component:WelcomeComponent},
{path:'products',component:ProductsComponent},
{path:'products/:id',canActivate:[ProductDetailGuard],component:ProductDetailsComponent},
{path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
