import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from './product-list/Product';
const URL='https://62bdc56cc5ad14c110c66a79.mockapi.io/api/Products';
@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private refresh= new Subject<void>();
  constructor(private http: HttpClient) { }

  public getAll():Observable<Product[]>{
    return this.http.get<Product[]>(URL).pipe(
      tap((products:Product[])=>products.forEach(product=>product.cantidad=0))
    );
  }
  public getrefresh():Subject<void>{
    return this.refresh;
  }
  
}
