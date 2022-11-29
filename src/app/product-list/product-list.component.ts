import { Component, OnInit } from '@angular/core';
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
  }]
  constructor() { }

  ngOnInit(): void {
  }
  decrementar(Product: Product):void{
    if(Product.cantidad>0){
      Product.cantidad--;
    }
  }
  incrementar(Product: Product):void{
    if(Product.cantidad<Product.stock){
      Product.cantidad++;
    }
  }
  cambiarcantidad(event: KeyboardEvent,Product: Product):void{
      if(parseInt(event.key)<=9 && parseInt(event.key)>=0){
        if (Product.cantidad<Product.stock){
          console.log(event);
        }
        else{
          event.preventDefault();

        }
      }
  }

}
