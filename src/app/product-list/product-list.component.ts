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
    "stock":30,
    "enoferta": true,
  },{
    "Img":"assets/img/zapatilla.jpg",
    "Producto":"Remera",
    "Talle":20,
    "color":"rojo",
    "categoria":"Remeras",
    "stock":20,
    "enoferta": false,
  },{
    "Img":"assets/img/zapatilla.jpg",
    "Producto":"gorra",
    "Talle":40,
    "color":"azul",
    "categoria":"Gorras",
    "stock":0,
    "enoferta": true,
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
