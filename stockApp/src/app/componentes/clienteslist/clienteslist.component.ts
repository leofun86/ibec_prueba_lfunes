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
import { Component, OnInit } from '@angular/core';
import { ClienteService } from "../../cliente.service";
import { VarieteService } from 'src/app/variete.service';
import $ from 'jquery';

@Component({
  selector: 'app-clienteslist',
  templateUrl: './clienteslist.component.html',
  styleUrls: ['./clienteslist.component.css']
})
export class ClienteslistComponent implements OnInit {

  constructor(private ClienteService: ClienteService, private VarieteService: VarieteService) { }

  ngOnInit(): void {
    this.mostrarTodos();
    this.evalForm();
  }

  clientes:any;

  cargando:boolean = this.VarieteService.cargando;

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

  correo_exist:number;
  cedula_exist:number;

  mostrarTodos() {
    this.cargando=true;
    this.ClienteService.getClientes().subscribe(
      result => {
        this.clientes = result;
        this.cargando=false;
        this.VarieteService.cargando=false;
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
      $('.txt_result').text('Cliente editado correctamente');
      $('.alert').css('background', 'rgba(0, 0, 255, 0.2)');
      $('.alert').slideDown();
      setTimeout(()=>{ $('.alert').slideUp(); }, 3000);
    });
    //this.mostrarTodos();
  }
  agregarCliente(){
    if (this.correo_exist == 1 && this.cedula_exist == 1) {
      this.addCliente.ci=Number(this.addCliente['ci']);
      this.ClienteService.agregarCliente(this.addCliente).subscribe(()=>{
        this.mostrarTodos();
        this.addCliente = { ci:undefined, nombre:"", correo:"", celular:"", };
        $('.txt_result').text('Cliente agregado correctamente');
        $('.alert').css('background', 'rgba(0, 255, 0, 0.2)');
        $('.alert').slideDown();
        setTimeout(()=>{ $('.alert').slideUp(); }, 3000);
      });
    }
  }
  fadeInAddCliente() {
    $('#agregarCliente').fadeIn();
  }
  buscarCedula(ci) {
    if (ci.length == 8) {
      ci=Number(ci);
      this.ClienteService.buscarCedula(ci).subscribe(result =>{
        if(result == 1) {
          this.cedula_exist=0;
          $('.ci_exist').fadeOut();
          setTimeout(()=>{
            $('.ci_exist').css('color', 'red');
            $('.ci_exist').text('La cédula ya existe');
            $('.ci_exist').fadeIn();
          }, 300);
        } else {
          this.cedula_exist=1;
          $('.ci_exist').fadeOut();
          setTimeout(()=>{
            $('.ci_exist').css('color', 'green');
            $('.ci_exist').text('Cédula disponible');
            $('.ci_exist').fadeIn();}, 300);
            setTimeout(()=>{ $('.ci_exist').fadeOut(); }, 3000);
        }
      });
    }
  }
  buscarCorreo(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      this.ClienteService.buscarCorreo(mail).subscribe(result =>{
        if(result == 1) {
          this.correo_exist=0;
          $('.correo_exist').fadeOut();
          setTimeout(()=>{
            $('.correo_exist').css('color', 'red');
            $('.correo_exist').text('El correo ya existe');
            $('.correo_exist').fadeIn();
            this.evalForm();
          }, 300);
        } else {
          this.correo_exist=1;
          $('.correo_exist').fadeOut();
          setTimeout(()=>{
            $('.correo_exist').css('color', 'green');
            $('.correo_exist').text('Correo disponible');
            $('.correo_exist').fadeIn();}, 300);
            setTimeout(()=>{ $('.correo_exist').fadeOut(); }, 3000);
            this.evalForm();
        }
      });
    }
  }
  evalForm() {
    if (this.cedula_exist==1 && this.correo_exist == 1 && $('#nombre').val() != "" && $('#celular').val() != "") {
      console.log('Si');
      if ($('#celular').val().length == 9)  {      
       $('#btnAddCliente').prop('disabled', false);
      } else {
        $('#btnAddCliente').prop('disabled', true);
      }
    } else {
      console.log('No');
      $('#btnAddCliente').prop('disabled', true);
    }
  }
}
