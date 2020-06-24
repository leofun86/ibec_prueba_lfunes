/*
------------------------------------------------------------------------------
------------------------------------------------------------------------------

---- ██╗░░░░░███████╗░█████╗░  ███████╗██╗░░░██╗███╗░░██╗███████╗░██████╗ ---- 
---- ██║░░░░░██╔════╝██╔══██╗  ██╔════╝██║░░░██║████╗░██║██╔════╝██╔════╝ ---- 
---- ██║░░░░░█████╗░░██║░░██║  █████╗░░██║░░░██║██╔██╗██║█████╗░░╚█████╗░ ---- 
---- ██║░░░░░██╔══╝░░██║░░██║  ██╔══╝░░██║░░░██║██║╚████║██╔══╝░░░╚═══██╗ ---- 
---- ███████╗███████╗╚█████╔╝  ██║░░░░░╚██████╔╝██║░╚███║███████╗██████╔╝ ---- 
---- ╚══════╝╚══════╝░╚════╝░  ╚═╝░░░░░░╚═════╝░╚═╝░░╚══╝╚══════╝╚═════╝░ ---- 

---- Prueba Fullstack para IBEC Internacional --------------------------------
---- leorecord@hotmail.com ---------------------------------------------------
------------------------------------------------------------------------------
------------------------------------------------------------------------------
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  urlProducto = environment.productoUrl;
  
  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.urlProducto}/mostrar_producto.php`);
  }
  agregarProducto(new_producto) {
    return this.http.post(`${this.urlProducto}/agregar_producto.php`, JSON.stringify(new_producto));
  }
  editarProducto(producto) {
    return this.http.put(`${this.urlProducto}/editar_producto.php`, JSON.stringify(producto));
  }
}
