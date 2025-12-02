import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-nuestros-productos',
  imports: [],
  templateUrl: './nuestros-productos.html',
  styleUrl: './nuestros-productos.css',
})

export class NuestrosProductos implements AfterViewInit {

  Rel: string = "Relevancia";
  Relevancia: boolean = true;

  MasRel = document.getElementById("masRel");
  MenosRel = document.getElementById("menosRel");


  masRel() {
    this.Rel = "Más relevante";
    this.Relevancia = true;
  }

  menosRel() {
    this.Rel = "Menos relevante";
    this.Relevancia = false;
  }

  buscarProductos() {
    //esto es para la busqueda con filtros de la página
  }


  ngAfterViewInit() {
    const botonPrecio = document.getElementById("precio");
    const botonFiltrar = document.getElementById("filtrar");
    const botonRelevancia = document.getElementById("relevancia");
    const precioMenu = document.getElementById("PrecioV");
    const filtrarMenu = document.getElementById("FiltrarV");
    const relevanciaMenu = document.getElementById("RelevanciaV");


    if (!botonPrecio || !precioMenu) return;
    if (!botonFiltrar || !filtrarMenu) return;
    if (!botonRelevancia || !relevanciaMenu) return;


    botonPrecio.addEventListener("click", () => {
      precioMenu.classList.toggle("visible");
    });

    botonFiltrar.addEventListener("click", () => {
      filtrarMenu.classList.toggle("visible");
    });

    botonRelevancia.addEventListener("click", () => {
      relevanciaMenu.classList.toggle("visible");
    });

  }




}
