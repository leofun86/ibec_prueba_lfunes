import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../cliente.service";
import $ from 'jquery';

@Component({
  selector: 'app-clienteslist',
  templateUrl: './clienteslist.component.html',
  styleUrls: ['./clienteslist.component.css']
})
export class ClienteslistComponent implements OnInit {

  clientes = {};

  editCliente = {
    ci:undefined,
    nombre:"",
    correo:"",
    celular:"",
  };

  addCliente = {
    ci:undefined,
    nombre:"",
    correo:"",
    celular:"",
  }

  constructor(private ClienteService: ClienteService) { }

  ngOnInit(): void {
    this.mostrarTodos();
  }

  mostrarTodos() {
    this.ClienteService.getClientes().subscribe(
      result => {
        this.clientes = result;
        //console.log(this.stock);
      }
      );
  }
  editarCliente(ci:number, nombre:string, correo:string, celular:string) {
    this.editCliente.ci=ci;
    this.editCliente.nombre=nombre;
    this.editCliente.correo=correo;
    this.editCliente.celular=celular;
    $('#editarCliente').fadeIn();
  }
  clienteEditado() {
    //console.log(this.editStock)
    this.editCliente.ci=Number(this.editCliente['ci']);
    this.ClienteService.editarCliente(this.editCliente).subscribe(()=>{
      this.mostrarTodos();
    });
    //this.mostrarTodos();
  }
  agregarCliente(){
    this.addCliente.ci=Number(this.addCliente['ci']);
    this.ClienteService.agregarCliente(this.addCliente).subscribe(()=>{
      this.mostrarTodos();
      this.addCliente = { ci:undefined, nombre:"", correo:"", celular:"", }
    });
  }
  fadeInAddCliente() {
    $('#agregarCliente').fadeIn();
  }
}
