import { Component, OnInit } from '@angular/core';
import { StockService } from "../../stock.service";
import $ from 'jquery';

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  stock = {};

  editStock = {
    id:undefined,
    id_producto:undefined,
    ci_cliente:undefined
  };
  
  clientes_list = {};
  productos_list = {};

  addStock = {
    id_producto:undefined,
    ci_cliente:undefined,
  }


  constructor(private StockService: StockService) { }

  ngOnInit() {
    this.mostrarTodos();
    this.mostrarDatos();
  }
  mostrarDatos() {
    this.StockService.getProductosList().subscribe(
      result => { this.productos_list = result; console.log("Productos"); }
    );
    this.StockService.getClientesList().subscribe(
      result => { this.clientes_list = result; console.log("Clientes"); }
    );
  }
  mostrarTodos() {
    this.StockService.getStock().subscribe(
      result => {
        this.stock = result;
        //console.log(this.stock);
      }
      );
  }
  editarStock(id:number, ci_cliente:number, id_producto:number) {
    this.editStock.id=id;
    this.editStock.id_producto=id_producto;
    this.editStock.ci_cliente=ci_cliente;
    $('#editarStock').fadeIn();
  }
  stockEditado() {
    //console.log(this.editStock)
    this.editStock.id_producto=Number(this.editStock['id_producto']);
    this.editStock.ci_cliente=Number(this.editStock['ci_cliente']);
    this.StockService.editarStock(this.editStock).subscribe(()=>{
      this.mostrarTodos();
    });
    //this.mostrarTodos();
  }
  agregarStock(){
    this.addStock.id_producto=Number(this.addStock['id_producto']);
    this.addStock.ci_cliente=Number(this.addStock['ci_cliente']);
    this.StockService.agregarStock(this.addStock).subscribe(()=>{
      this.mostrarTodos();
    });
  }
  fadeInAddStock() {
    $('#agregarStock').fadeIn();
  }
  eliminarStock(id) {
    this.StockService.eliminarStock(id).subscribe(result=>{
      this.mostrarTodos();
    });
  }
}
