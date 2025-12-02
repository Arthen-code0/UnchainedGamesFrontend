import {Component, AfterViewInit, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [

  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})

export class Navbar implements AfterViewInit {
    ngAfterViewInit() {
      const boton = document.getElementById("botonmenu");
      const nav = document.getElementById("listadiv");

      if (!boton || !nav) return;

      boton.addEventListener("click", () => {
        nav.classList.toggle("visible");
      });

    }
}
