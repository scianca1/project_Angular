import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { ProductfavoritesService } from '../productfavorites.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:  Product[] = [];
  
  constructor(private favorites:ProductfavoritesService,private productdata: ProductDataService) { 
    
  }

  ngOnInit(): void {
    this.productdata.getAll().subscribe(products=>this.products=products);
  }
  addfavorites(Product:Product):void {
    if(Product.cantidad>0){
    this.favorites.addfavorites(Product);
    Product.stock-=Product.cantidad;
    Product.cantidad=0;
    }
  }
  maxChange(mensaje:String){
    alert(mensaje);
  }


}
