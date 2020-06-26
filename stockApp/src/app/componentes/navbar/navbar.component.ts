import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { ClienteslistComponent } from '../clienteslist/clienteslist.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  hide:number=0;

  constructor() { }

  ngOnInit(): void {
    this.advertencia()
  }

  clienteLink() {
    $('#container_clientes').fadeIn();
  }
  advertencia() {
    if(this.hide != 1) {
      $('#advertencia').fadeIn();
    }
    this.hide=1;
  }
  fadeOutAdvertencia() {
    $('#advertencia').fadeOut();
  }
  youtube(val){
    switch(val) {
      case 1:
        $('#item_insert').fadeIn();
      break;
      case 2:
        $('#item_update').fadeIn();
      break;
      case 3:
        $('#item_delete').fadeIn();
      break;
      case 4:
        $('#cliente_insert').fadeIn();
      break;
      case 5:
        $('#cliente_update').fadeIn();
      break;
      case 6:
        $('#producto_insert').fadeIn();
      break;
      case 7:
        $('#producto_update').fadeIn();
      break;
    }
  }

}
