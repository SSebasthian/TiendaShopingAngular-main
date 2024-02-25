import { ProductServices } from './../../api/ProductoServices.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Producto } from '../../model/Producto.model';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})

export class ProductosComponent {
[x: string]: any;
  
  readonly productsSvs = inject(ProductServices);
  products: Observable<Producto[]> = this.productsSvs.getAllProductos();
  Let: any;
addNewProduct: any;
  
  
  constructor(private CartService: CartService){
    // this.obtenerlocalstorage()
    
  }
  
  

  agregarArticuloTienda(producto: Producto){
    this.CartService.addNewProduct(producto)
    localStorage.setItem('Articulo',JSON.stringify(this.CartService))  

    alert("se agrego en localstorage")
  }
  // obtenerlocalstorage(){
  //     this.CartService = JSON.parse (localStorage.getItem('Articulo')!) 
  //   }

}