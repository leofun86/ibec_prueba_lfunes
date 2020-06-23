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
import { Stock } from "./stock";

@Injectable({
  providedIn: 'root'
})
export class StockService {
  baseUrl = environment.baseUrl
  
  constructor(private http: HttpClient) { }

  getStock() {
    return this.http.get(`${this.baseUrl}/mostrar_stock.php`);
  }
  editarProducto(stock) {
    console.log(stock);
    return this.http.put(`${this.baseUrl}/editar_stock.php`, JSON.stringify(stock));
  }
  getProductosList() {
    return this.http.get(`${this.baseUrl}/datos_stock.php?op=1`);
  }
  getClientesList() {
    return this.http.get(`${this.baseUrl}/datos_stock.php?op=2`);
  }
}
