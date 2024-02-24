import { Carrito, ProductoCarrito } from './../../model/Carrito.model';
import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatTableModule} from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Producto } from '../../model/Producto.model';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [MatTableModule,MatIcon,MatCard,RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})



export class CarritoComponent{
  
  Producto: Producto[] = [];

  constructor(){
    
    // this.obtenerlocalstorage();
    
  }
  // obtenerlocalstorage(){
  //   this.Producto = JSON.parse (localStorage.getItem('Articulo')!) 
  // }


  carritoDeCompras: Carrito = {
    CostoTotal: 85000,
    
    productoCarrito: [
      { id: 3, nombreProducto: 'Camiseta Negra', Costo: 25000, cantidad: 2, subtotal: 50000 },
      { id: 2, nombreProducto: 'Baso Estampado', Costo: 20000, cantidad: 1, subtotal: 20000 },
      { id: 3, nombreProducto: 'Pegatina', Costo: 5000, cantidad: 3, subtotal: 15000 }
    ]
  };

  eliminarProducto(id: number) {
    // Aquí deberías implementar la lógica para eliminar el producto con el ID proporcionado
    // Puedes emitir un evento, llamar a un servicio, etc.
    console.log(`Eliminar producto con ID: ${id}`);
  }
}

