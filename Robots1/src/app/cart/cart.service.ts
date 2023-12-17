import { Injectable } from '@angular/core';
import { IProduct } from '../products/products.model';
import {BehaviorSubject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  private cartSubject:BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([])

  cart$= this.cartSubject.asObservable();

  addToCart(product:IProduct){
    const currentCart = this.cartSubject.getValue();
    const existingProduct=currentCart.find(p=>p.id===product.id);
    if(existingProduct){
      existingProduct.quantity+=1;
      console.log(existingProduct.quantity)
    }
    else {
      const updatedCart = [...currentCart,{ ...product, quantity: 1 }];
      this.cartSubject.next(updatedCart);
    }
  }

  removeFromCart(product:IProduct){
    let newCart = this.cartSubject.getValue().filter((i) => i !== product);
    this.cartSubject.next(newCart);
  }

  totalPrice(product:IProduct){
    let newPrice = this.cartSubject.getValue().filter((p)=>p.price===product.price)
    this.cartSubject.next(newPrice)
    console.log(`This is new price ${newPrice}`)
   
  }

}
