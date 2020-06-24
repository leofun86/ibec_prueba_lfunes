import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocklistComponent } from './componentes/stocklist/stocklist.component';
import { ClienteslistComponent } from './componentes/clienteslist/clienteslist.component';
import { ProductoslistComponent } from './componentes/productoslist/productoslist.component';


const rutas: Routes = [
  { path: 'stocklist', component: StocklistComponent },
  { path: 'clientes', component: ClienteslistComponent },
  { path: 'productos', component: ProductoslistComponent },
  { path: '**', redirectTo: 'stocklist', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
