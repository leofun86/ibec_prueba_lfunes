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
import { environment } from '../environments/environment.prod';
//import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  urlStock = environment.urlStock;
  
  constructor(private http: HttpClient) { }

  getStock() {
    return this.http.get(`${this.urlStock}/mostrar_stock.php`);
  }
  agregarStock(new_stock) {
    return this.http.post(`${this.urlStock}/agregar_stock.php`, JSON.stringify(new_stock));
  }
  editarStock(stock) {
    return this.http.put(`${this.urlStock}/editar_stock.php`, JSON.stringify(stock));
  }
  eliminarStock(id) {
    return this.http.get(`${this.urlStock}/eliminar_stock.php?id=${id}`);
  }
  getProductosList() {
    return this.http.get(`${this.urlStock}/datos_stock.php?op=1`);
  }
  getClientesList() {
    return this.http.get(`${this.urlStock}/datos_stock.php?op=2`);
  }
}
