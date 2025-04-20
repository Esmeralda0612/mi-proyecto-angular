import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  imports: [RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css',
  standalone: true,
  
})
export class CatalogoComponent {
  selectedLibro: any; // Almacena el libro seleccionado
  libro: any; // Almacena el libro seleccionado

  constructor() {
    this.libro = this.Libros;
  }

  verDetalles(libro: any) {
    this.selectedLibro = libro; // Almacena el libro seleccionado
  }

  agregarAlCarrito(libro: any) {
    alert(`${libro.titulo} agregado al carrito`);
  }


  Libros = [
  { id: 1, titulo: 'Caraval', autor: 'Stephanie Garber', imagen: 'assets/Caraval.jpg', descripcion: 'Distopía clásica' },
  { id: 2, titulo: 'Cuando no queden más estrellas que contar', autor: 'María Martínez', descripcion: 'Romance', imagen: 'assets/CNQMEQC.jpg' },
  { id: 3, titulo: 'El faro de los amores dormidos', autor: 'Andrea Longarela', descripcion: 'Roamnce', imagen: 'assets/FAROSleep.jpg' },
  { id: 4, titulo: 'Ana de las Tejas Verdes', autor: 'L.M.Montgomery', descripcion: 'Clásico', imagen: 'assets/AnneEdicionEspecial.jpg' },
  { id: 5, titulo: 'Destrozáme', autor: 'Taheret Mafi', descripcion: 'Distopía', imagen: 'assets/Destrozame1.jpg' },
  { id: 6, titulo: 'Hija de la Tierra', autor: 'Andrea Longarela', descripcion: 'Fantasia y Romance', imagen: 'assets/HijadelaTierra.jpg' },
  { id: 7, titulo: 'The Pumpkin Spice Café', autor: 'Laurie Gilmore', descripcion: 'Romance', imagen: 'assets/PumpkinSpiceCafe.jpg' },
  { id: 8, titulo: 'El día que dejó de nevar en Alaska', autor: 'Alice Kellen', descripcion: 'Romance', imagen: 'assets/AlaskaAliceKellen.jpg' },
  { id: 9, titulo: 'Saga: Los Juegos del Hambre', autor: 'Suzanne Collins', descripcion: 'Distopía', imagen: 'assets/SagaTHG.jpg' },
  { id: 10, titulo: 'Un Corazón por Navidad', autor: 'Sophie Jomain', descripcion: 'Romance', imagen: 'assets/CorazonNavidad.jpg' },
  { id: 11, titulo: 'A dos metros de ti', autor: 'Rachael Lippincott', descripcion: 'Romance', imagen: 'assets/A2MetrosdeTi.jpg' },
  { id: 12, titulo: 'No confíes en Asher Hall', autor: 'Myriam M. Lejardi', descripcion: 'Romance', imagen: 'assets/NoConfiesenAsherHall.jpg' },
  { id: 13, titulo: 'Donde no puedas encontrarme', autor: 'Tamara Molina', descripcion: 'Romance ', imagen: 'assets/DondeNoPuedasEncontrarme.jpg' },
  { id: 14, titulo: 'Hasta que nos quedemos sin estrellas', autor: 'Inma Rubiales', descripcion: 'Romance', imagen: 'assets/HastaQueNosQuedemosSinEstrellas.jpg' },
  { id: 15, titulo: 'Binding 13', autor: 'Chloe Walsh', descripcion: 'Romance', imagen: 'assets/Binding13.jpg' },
  { id: 16, titulo: 'Saga: Meses a tu lado', autor: 'Joana Marcús', descripcion: 'Romance', imagen: 'assets/MesesATuLado.jpg' },
  ];
}



