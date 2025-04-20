import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Libro } from '../../common/libro';

@Component({
  selector: 'app-libro',
  imports: [],
  standalone: true,
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})

export class LibroComponent implements OnInit {
goToCatalog() {
throw new Error('Method not implemented.');
}
addToCart() {
throw new Error('Method not implemented.');
}
  libro: any;

  Libro = [
    { id: 1, titulo: 'Caraval', autor: 'Stephanie Garber',imagen:'assets/Caraval.jpg' ,descripcion: 'Distopía clásica' },
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID recibido:', id);
    this.libro = this.libro.find((libro: { id: number; }) => libro.id === id);
    console.log('Libro encontrado:', this.libro);
  }

  volverAlCatalogo(): void {
    this.router.navigate(['/catalogo']);
  }

  agregarAlCarrito(): void {
    alert(`${this.libro.titulo} agregado al carrito`);
  }
}


  
/*export class LibroComponent {
  libro1: Libro = {
    id: 1,
    nombre: 'Caraval',
    autor: 'Stephanie Garber',
    editorial: 'Puck',
    isbn: 9788417854249,
    precio: 14.25,
    stock: 10,
    imagen: 'https://m.media-amazon.com/images/I/71-ODLZRpuS._AC_UF894,1000_QL80_.jpg',
    categoria: 'Fantasía y Magia',
    sinopsis: 'Bienvenido, bienvenido a Caraval. Ganar significa la libertad. Perder, renunciar a todos tus sueños. ¿Estás preparado? El juego ha empezado.',
    fechaPublicacion: new Date('2021-09-27'),
    idioma: 'Castellano',
    formato: 'Tapa blanda',
    paginas: 448
  };
  
}
*/