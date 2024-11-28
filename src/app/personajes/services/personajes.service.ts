import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {
  private baseUrl = 'https://dragonball-api.com/api';

  constructor(private http: HttpClient) {}

  getPersonajes(): Observable<any[]> {
    return this.http.get<any>(`${this.baseUrl}/characters?page=1`).pipe(
      map((response) => response.items)
    );
  }
}
