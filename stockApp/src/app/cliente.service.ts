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
export class ClienteService {
  urlCliente = environment.clienteUrl;
  
  constructor(private http: HttpClient) { }

  getClientes() {
    return this.http.get(`${this.urlCliente}/mostrar_cliente.php`);
  }
  agregarCliente(new_cliente) {
    return this.http.post(`${this.urlCliente}/agregar_cliente.php`, JSON.stringify(new_cliente));
  }
  editarCliente(cliente) {
    return this.http.put(`${this.urlCliente}/editar_cliente.php`, JSON.stringify(cliente));
  }
  buscarCedula(ci) {
    return this.http.get(`${this.urlCliente}/buscar_datos.php?op=1&ci=${ci}`);
  }
  buscarCorreo(mail) {
    return this.http.get(`${this.urlCliente}/buscar_datos.php?op=2&mail=${mail}`);
  }
}
