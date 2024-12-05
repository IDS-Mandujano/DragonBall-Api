import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Transformaciones } from '../models/transformaciones';

@Injectable({
  providedIn: 'root',
})
export class TransformacionesService {
  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getTransformacionesByCharacter(characterId: number): Observable<Transformaciones[]> {
    return this.http.get<any>(`${this.apiUrl}/${characterId}`).pipe(
      map(response => response.transformations)
    );
  }

  updateTransformacion(transformacion: Transformaciones): Observable<Transformaciones> {
    return this.http.put<Transformaciones>(`${this.apiUrl}/${transformacion.id}`, transformacion);
  }
}