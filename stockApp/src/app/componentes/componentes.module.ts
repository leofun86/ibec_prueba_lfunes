import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { StocklistComponent } from './stocklist/stocklist.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClienteslistComponent } from './clienteslist/clienteslist.component';
import { ProductoslistComponent } from './productoslist/productoslist.component';
import { FormGroup, FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [StocklistComponent, NavbarComponent, ClienteslistComponent, ProductoslistComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    StocklistComponent,
    NavbarComponent,
    ClienteslistComponent,
    ProductoslistComponent
  ]
})
export class ComponentesModule { }
