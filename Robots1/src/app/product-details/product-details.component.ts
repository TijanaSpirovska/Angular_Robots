import { Component,OnInit, OnDestroy } from '@angular/core';
import { ProuctsService } from '../products/product/proucts.service';
import { IProduct } from '../products/products.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IProductDetail } from './product-details.model';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit,OnDestroy {
  constructor(private productService:ProuctsService, private activeRoute:ActivatedRoute ) {}

  products:IProduct | undefined;
  sub!:Subscription;
  subscribe!:Subscription;
  productDetail:IProductDetail[]=[]
  desc:string='';

    ngOnInit(): void {
      const id = Number(this.activeRoute.snapshot.paramMap.get('id'))
      this.sub = this.productService.getProductId(id).subscribe({
        next: products => this.products = products
      })
  }
 
  productDescription(id: number): void {
    this.productService.productDescription(id).subscribe((description) => {
      this.desc = description;
    });
  }


    ngOnDestroy(): void {
      if(this.sub){
        this.sub.unsubscribe();
      }
      if(this.subscribe){
        this.subscribe.unsubscribe();
      }
    }




}
