import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/Product';
@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {

  constructor() {}
  @Input() 
  cantidad: number;
  @Input() 
  max: number;
  @Output()
  cantidadChange :EventEmitter<number>=new EventEmitter<number>();
  @Output()
  maxChange :EventEmitter<String>=new EventEmitter<String>();
  ngOnInit(): void {
  }
  decrementar():void{
    if(this.cantidad>0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }
  incrementar():void{
    if(this.cantidad<this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.maxChange.emit("llegaste al maximo de stock");
    }
  }
  cambiarcantidad(event: KeyboardEvent):void{
      if(parseInt(event.key)<=9 && parseInt(event.key)>=0){
        if (this.cantidad<this.max){
          console.log(event);
          this.cantidadChange.emit(this.cantidad);
        }
        else{
          event.preventDefault();
          this.cantidadChange.emit(this.cantidad);
        }
      }
  }

}
