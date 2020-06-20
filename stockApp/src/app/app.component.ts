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

  constructor(private StockService: StockService) { }

  mostrarTodos() {
    this.StockService.getStock().subscribe(
      result => {
        this.productos = result;
        console.log(this.productos);
      }
      );
  }

  ngOnInit() {
    this.mostrarTodos();
    console.log(this.productos);
  }

  

}
