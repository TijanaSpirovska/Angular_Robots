import { Component,OnInit, OnDestroy} from '@angular/core';
import { CartService } from './cart.service';
import {Subscription} from 'rxjs';
import { IProduct } from '../products/products.model';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit,OnDestroy{

 

  constructor(private cartService:CartService
    ){}
  products!:IProduct[]
  sub!:Subscription;
  productPrice!:any;
  productQuantity!:any;
  totalPrice:number=0;
  


  ngOnInit(): void {
    
    this.sub = this.cartService.cart$.subscribe({
      next:products=> {this.products = products,
        this.productPrice = this.products.map((p) => p.price),
        this.productQuantity=this.products.map((q)=>q.quantity);
        console.log(`This is the product prices: ${this.productPrice}`);
        console.log(`This is the product prices: ${this.productQuantity}`);
        this.calculateTotalPrice(this.productPrice,this.productQuantity)
      }
    }) 
   
    }
    
  
    calculateTotalPrice(price:any,quantity:any):void{
      const totalSum = price.map((price: number, i: number) => price * quantity[i])
      .reduce((sum: number, product: number) => sum + product, 0);
      console.log(`The price is ${totalSum}`)
     this.totalPrice = totalSum;
     
    
    }
        
   

  ngOnDestroy(): void {
    if (this.sub){
      this.sub.unsubscribe();
    }
    
  }

  removeFromCart(product:IProduct){
    this.cartService.removeFromCart(product);
  }

}
