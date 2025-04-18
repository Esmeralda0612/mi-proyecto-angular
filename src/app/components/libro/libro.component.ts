import { Component } from '@angular/core';
import { Libro } from '../../common/libro';

@Component({
  selector: 'app-libro',
  imports: [],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})

export class LibroComponent {
  libro1: Libro = {
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
  libro2: Libro = {
    nombre: 'El juego del calamar',
    autor: 'Hwang Dong-hyuk',
    editorial: 'Planeta',
    isbn: 9788408261230,
    precio: 18.90,
    stock: 5,
    imagen: 'https://m.media-amazon.com/images/I/81+2g1j4JtL._AC_UF894,1000_QL80_.jpg',
    categoria: 'Thriller',
    sinopsis: 'Un grupo de personas en crisis económica se ve atrapado en un juego mortal donde deben competir por un premio millonario.',
    fechaPublicacion: new Date('2022-10-01'),
    idioma: 'Castellano',
    formato: 'Tapa dura',
    paginas: 320
  };
  libro3: Libro = {
    nombre: 'El nombre del viento',
    autor: 'Patrick Rothfuss',
    editorial: 'Plaza & Janés',
    isbn: 9788401013920,
    precio: 22.50,
    stock: 8,
    imagen: 'https://m.media-amazon.com/images/I/81+2g1j4JtL._AC_UF894,1000_QL80_.jpg',
    categoria: 'Fantasía Épica',
    sinopsis: 'La historia de Kvothe, un joven aventurero y músico que busca venganza y conocimiento en un mundo lleno de magia y misterio.',
    fechaPublicacion: new Date('2007-03-27'),
    idioma: 'Castellano',
    formato: 'Tapa dura',
    paginas: 662
  };
}
