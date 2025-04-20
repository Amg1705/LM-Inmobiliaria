import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Propiedad } from '../models/propiedad';

@Injectable({
  providedIn: 'root',
})
export class PropiedadesService {
  private apiUrl = '/assets/propiedades.json';

  constructor(private http: HttpClient) {}

  getPropiedades(): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(this.apiUrl);
  }

  getPropiedadById(id: number): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(this.apiUrl); // Filtraremos en el componente
  }
}