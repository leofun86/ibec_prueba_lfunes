import { Component, OnInit } from '@angular/core';
import { StockService } from "../../stock.service"
import { Stock } from "../../stock";

@Component({
  selector: 'app-stocklist',
  templateUrl: './stocklist.component.html',
  styleUrls: ['./stocklist.component.css']
})
export class StocklistComponent implements OnInit {

  //public editStock: Stock = new Stock(0, 0, 0);

  stock = {};

  
  editStock = {
    id:undefined,
    id_producto:undefined,
    ci_cliente:undefined
  };
  

  clientes_list = {};

  productos_list = {};

  constructor(private StockService: StockService) { }

  ngOnInit() {
    this.mostrarTodos();
    this.mostrarDatos();
  }
  mostrarDatos() {
    this.StockService.getProductosList().subscribe(
      result => { this.productos_list = result; console.log("Productos"); console.log(this.productos_list); }
    );
    this.StockService.getClientesList().subscribe(
      result => { this.clientes_list = result; console.log("Clientes"); console.log(this.clientes_list); }
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
  }
  stockEditado() {
    //console.log(this.editStock)
    this.editStock.id_producto=Number(this.editStock['id_producto']);
    this.editStock.ci_cliente=Number(this.editStock['ci_cliente']);
    this.StockService.editarProducto(this.editStock).subscribe(()=>{
      this.mostrarTodos();
    });
    //this.mostrarTodos();
  }
  
}
