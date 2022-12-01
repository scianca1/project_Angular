import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductfavoritesService {
 
  private _favoritesList: Product[]=[];
  favoritesList:BehaviorSubject<Product[]>=new BehaviorSubject<Product[]>([]);
  constructor() { } 
  addfavorites(Product: Product) {
    let item: Product|undefined= this._favoritesList.find((v1)=>v1.Producto==Product.Producto);
    if(!item){
    this._favoritesList.push({...Product});
    }else{
      item.cantidad+=Product.cantidad;
    }
    console.log(this._favoritesList);
    this.favoritesList.next(this._favoritesList);
  }
}
