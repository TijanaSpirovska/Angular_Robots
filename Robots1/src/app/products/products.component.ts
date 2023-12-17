import { Component, OnInit, OnDestroy,Input,Output } from '@angular/core';
import { ProuctsService } from './product/proucts.service';
import { IProduct } from './products.model';
import { Subscription } from 'rxjs';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  filteredProducts: IProduct[] = [];
  sub!: Subscription;
  boughtProduct:string='';
  constructor(private productService: ProuctsService, private cartService:CartService) { }
  filterValue!: string;
  showMessage:boolean=false;

  
  ngOnInit(): void {
    this.sub = this.productService.getProducts().subscribe({
      next: products => {
        this.products = products
        this.filteredProducts = this.products
      }
    })
  }

  productBuy(message:string){
    this.boughtProduct=message;
      this.showMessage = true;
      setTimeout(()=>{
        this.showMessage=false
      },900)

    }
  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  

  filterProducts(filter: string) {
    this.filterValue = filter.toLocaleLowerCase()
    console.log(`This is the filter value ${this.filterValue}`)
    this.filteredProducts = this.performFilter(this.filterValue);

  }

  performFilter(filterBy: any): IProduct[] {
    if (filterBy === 'all') {
      return this.products;
    }
    else {
      return this.products.filter((product: IProduct) => {
        return (
          product.name.toLocaleLowerCase().includes(filterBy) ||
          product.category.toLocaleLowerCase().includes(filterBy) ||
          product.description.toLocaleLowerCase().includes(filterBy))

      })
    }
  }

  addToCart(product:IProduct){
    this.cartService.addToCart(product);
   }



}
