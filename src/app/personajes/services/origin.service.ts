import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Planet } from '../Models/planet';

@Injectable({
  providedIn: 'root'
})
export class OriginService {
  
  private apiUrl = 'https://dragonball-api.com/api/characters';

  constructor(private http: HttpClient) {}

  getOriginPlanetByCharacter(characterId: number): Observable<Planet> {
    return this.http.get<any>(`${this.apiUrl}/${characterId}`).pipe(
      map(response => {
        return response.originPlanet;
      })
    );
  }
  
}
