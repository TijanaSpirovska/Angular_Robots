import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ProuctsService } from '../../products/product/proucts.service';
import { Observable, catchError, map, of } from 'rxjs';
import { error } from 'console';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard {

  constructor(private router: Router, private productService: ProuctsService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const id = Number(route.paramMap.get('id'));

    if (isNaN(id) || id < 0) {
      alert('Invalid product id');
      return this.router.navigate(['/products']);
    }

    return this.productService.getProductId(id).pipe(
      map((product) => {
        if (!product) {
          alert('Product not found');
          this.router.navigate(['/products']);
          return false;
        }
        return true;
      }),
      catchError((error) => {
        console.log('Error checking product existence', error);
        alert('An error occurred while checking the product');
        this.router.navigate(['/products']);
        return of(false);  // Use 'of' here to create a new observable
      })
    );
  }
}

