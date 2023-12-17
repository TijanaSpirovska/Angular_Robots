import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { CalcualtePriceComponent } from './calcualte-price/calcualte-price.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    CartComponent,
    ProductDetailsComponent,
    PopUpComponent,
    CalcualtePriceComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
