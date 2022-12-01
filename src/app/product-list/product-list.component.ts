import { Component, OnInit } from '@angular/core';
import { ProductfavoritesService } from '../productfavorites.service';
import { Product } from './Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products:  Product[] = [ {
    "Img":"assets/img/zapatilla.jpg",
    "Producto":"zapatilla",
    "Talle":36,
    "color":"negro",
    "categoria":"calsado",
    "stock":10,
    "enoferta": true,
    "cantidad":0,
  },{
    "Img":"assets/img/zapatilla.jpg",
    "Producto":"Remera",
    "Talle":20,
    "color":"rojo",
    "categoria":"Remeras",
    "stock":4,
    "enoferta": false,
    "cantidad":0,
  },{
    "Img":"assets/img/zapatilla.jpg",
    "Producto":"gorra",
    "Talle":40,
    "color":"azul",
    "categoria":"Gorras",
    "stock":0,
    "enoferta": true,
    "cantidad":0,
  }];
  
  constructor(private favorites:ProductfavoritesService) { 
    
  }

  ngOnInit(): void {
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
