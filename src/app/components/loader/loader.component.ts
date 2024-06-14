import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent  implements OnInit {
  @Output() loaderCompleto = new EventEmitter<void>();

  // Configuración inicial
  // El index de la imagen empieza en 0
  indexImagen: number = 0;
  // variable para guardar el tiempo
  tiempoTranscurrido: number = 0;
  // Tiempo de cada imagen en segundos
  tiempoImagen: number = 5;
  // Tiempo total en segundos
  total: number = 15;
  // Ruta de redirección
  redireccion: string = '/fin';

  // array de imágenes y textos
  imagenes = [
    { imagen: 'assets/images/image1.jpg', texto: 'Imagen 1' },
    { imagen: 'assets/images/image2.jpg', texto: 'Imagen 2' },
    { imagen: 'assets/images/image3.jpg', texto: 'Imagen 3' }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.iniciarRotacionImagenes();
  }

  iniciarRotacionImagenes() {
    const rotarImagen = () => {
      this.tiempoTranscurrido += this.tiempoImagen;
      // index de la imagen a mostrar
      this.indexImagen = Math.floor((this.tiempoTranscurrido % (this.imagenes.length * this.tiempoImagen)) / this.tiempoImagen);
      console.log("current Index: ", this.indexImagen);
      
      // Si el tiempo es mayor o igual al total del tiempo, hacer la redirección
      if (this.tiempoTranscurrido >= this.total) {
        this.redireccionOtraPagina();
      } else {
        // Llamar de nuevo a setTimeout para continuar rotando las imágenes
        setTimeout(rotarImagen, this.tiempoImagen * 1000);
      }
    };
  
    // Iniciar el primer setTimeout
    setTimeout(rotarImagen, this.tiempoImagen * 1000);
  }

  redireccionOtraPagina() {
    // Avisar cuando el loader se completa
    this.loaderCompleto.emit();
    // Se hace la redirección a la página final
    this.navCtrl.navigateForward(this.redireccion);
  }

}
