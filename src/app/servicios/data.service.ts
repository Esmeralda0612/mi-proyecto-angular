import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../common/libro';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getPlayer(): Observable<Libro[]> {
    return this.http.get<Libro[]>('data/data.json')
  }
}