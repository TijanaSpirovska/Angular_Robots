import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap,catchError,throwError, map,of } from 'rxjs';
import { IProduct } from '../products.model';
import { IProductDetail } from '../../product-details/product-details.model';
import { defaultIfEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProuctsService {

  constructor(private http:HttpClient) { }
  private productUrl = 'assets/products/products.json';
  private productDetailsUrl = 'assets/products/products-details.json'
  getProducts():Observable<IProduct[]>{
    
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log ('All:',JSON.stringify(data))),
      catchError(this.handleError)  
    )
  }

  getProductId(id:number):Observable<IProduct | undefined>{
    return this.getProducts().pipe(
      map((products:IProduct[]) => products.find(p=>p.id === id))
    )
  }


  // productService.ts
  productDescription(id: number): Observable<string> {
    return this.getProductDetails(id).pipe(
      map((product) => {
        if (product !== undefined) {
          console.log(`Product Description: ${product.description}`);
          return product.description;
        } else {
          console.log('Product not found');
          return 'Product not found';
        }
      })
    );
  }

  getProductDetails(id: number): Observable<IProductDetail | undefined> {
    return this.http.get<IProductDetail[]>(this.productDetailsUrl).pipe(
      map((productDetails: IProductDetail[]) => productDetails.find((p) => p.id === id))
    );
  }



  

  

  

  private handleError(err:HttpErrorResponse):Observable<never>{
    let errorMessage ='';
    if(err.error instanceof ErrorEvent){
      errorMessage = `An error occurred: ${err.error.message}`
    }
    else {
      errorMessage = `Server returned code: ${err.status}, error message is:${err.message}`
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
