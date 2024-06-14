import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { LoaderComponent } from '../../components/loader/loader.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mostrarLoader: boolean = false;

  lanzarLoader() {
    // se empuieza a mostrar el loader
    this.mostrarLoader = true;
  }

  loaderCompleto() {
    // el controlador del componente avisa que se completo y lo ocultamos
    console.log("Se completo");
    this.mostrarLoader = false;
  }

}
