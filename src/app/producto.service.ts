// src/app/services/producto.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Libro } from './common/libro';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url = 'assets/data/productos.json';

  constructor(private http: HttpClient) {}

  //getProductos(): Observable<[Libro]> {
    //return this.http.get<Libro[]>(this.url);
  //}

  getProductoPorId(id: number): Observable<Libro | undefined> {
      return this.http.get<Libro[]>(this.url).pipe(
        map((productos: Libro[]) => productos.find(p => p.id === id))
    );
    
  }
}
