import { Injectable } from '@angular/core';
import { Producto } from "./producto";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  baseUrl = environment.baseUrl
  
  constructor(private http: HttpClient) { }

  getStock() {
    return this.http.get(`${this.baseUrl}/mostrar_stock.php`);
  }

}
