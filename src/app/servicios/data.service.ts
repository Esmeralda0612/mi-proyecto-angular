import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro, LibroD } from '../common/libro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getBooks(): Observable<Libro> {
    return this.http.get<Libro>('data/data.json')
  }

 //Esta es la funcion que tienes que modificar para que obtenga un solo libro
 
  //public getParticipantesbyId(id: string): Observable<Participante> {
  //  return this.getPlayer()
  //     .pipe(map(players => {
  //      const participante = players.participantes
  //        .find(participante => participante.alias === id);
  //       if (!participante) {
  //         throw new Error('No se encontró el jugador con el id: ' + id);
  //       }
  //       return participante;
  //    }));
  // }

   // Asegúrate de importar 'map' si no está ya importado

  //public getBookById(id: number): Observable<LibroD> {
  //  return this.getBooks().pipe(
  //    map((data: Libro) => {
  //      const book = data.Libros.find((libro: LibroD) => libro.id === id);
  //      if (!book) {
  //        throw new Error('No se encontró el libro con el id: ' + id);
  //      }
  //      return book;
  //    })
  //  );
  //}

  public getBookById(id: number): Observable<LibroD> {
    return this.getBooks().pipe(
      map((data: { Libros: LibroD[] }) => {
        const book = data.Libros.find((libro) => libro.id === id); // Cambié 'libros' a 'Libros'
        if (!book) {
          throw new Error('No se encontró el libro con el id: ' + id);
        }
        return book;
      })
    );
  }

  
}
