import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../common/libro';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getBooks(): Observable<Libro> {
    return this.http.get<Libro>('data/data.json')
  }

 //Esta es la funcion que tienes que modificar para que obtenga un solo libro
 
  // public getparticipanteyId(id: string): Observable<Participante> {
  //   return this.getPlayer()
  //     .pipe(map(players => {
  //       const participante = players.participantes
  //         .find(participante => participante.alias === id);
  //       if (!participante) {
  //         throw new Error('No se encontró el jugador con el id: ' + id);
  //       }
  //       return participante;
  //     }));
  // }
}
