import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocklistComponent } from './stocklist/stocklist.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StocklistComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [StocklistComponent]
})
export class ComponentesModule { }
