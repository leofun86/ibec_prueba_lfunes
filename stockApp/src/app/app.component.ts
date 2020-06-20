import { Component } from '@angular/core';
import { Producto } from './producto';
import { StockService } from "./stock.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stockApp';

  productos = {};

  editProd: any = {
    id_producto:undefined,
    ci_cliente:undefined,
    cantidad:undefined
  }

  constructor(private StockService: StockService) { }

  ngOnInit() {
    this.mostrarTodos();
    console.log(this.productos);
  }

  mostrarTodos() {
    this.StockService.getStock().subscribe(
      result => {
        this.productos = result;
        console.log(this.productos);
      }
      );
  }
  editarProducto(producto) {
    this.editProd=producto;
  }
  productoEditado() {
    this.StockService.editarProducto(this.editProd);
  }


  

}
