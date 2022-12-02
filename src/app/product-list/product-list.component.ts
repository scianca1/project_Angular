import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductDataService } from '../product-data.service';
import { ProductfavoritesService } from '../productfavorites.service';
import { Product } from './Product';
import { OnDestroy } from '@angular/core';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit,OnDestroy {
  products:  Product[] = [];
  suscription: Subscription;
  constructor(private favorites:ProductfavoritesService,private productdata: ProductDataService) { 
    
  }

  ngOnInit(): void {
    this.getAll();
    this.suscription=this.productdata.getrefresh().subscribe(()=>{this.getAll()});
  }
  ngOnDestroy(): void{
    this.suscription.unsubscribe();
    console.log("cerrado");
  }
  getAll():void{
    this.productdata.getAll().subscribe(products=>this.products=products);
  }
  addfavorites(Product:Product):void {
    if(Product.cantidad>0&&Product.stock>=Product.cantidad){
    this.favorites.addfavorites(Product);
    Product.stock-=Product.cantidad;
    Product.cantidad=0;
    }
    else if(Product.stock<=Product.cantidad){
      alert("La cantidad indicada exede el stock");
    }
  }
  maxChange(mensaje:String){
    alert(mensaje);
  }


}
