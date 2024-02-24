import { Injectable } from '@angular/core';
import { Producto } from '../model/Producto.model';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartProducts: Producto[] = [];

 
  
  constructor() {

  }



  addNewProduct(Producto: Producto){
    this.cartProducts.push(Producto);
  }
}
