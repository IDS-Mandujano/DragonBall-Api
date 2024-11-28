import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transformaciones } from '../models/transformaciones';

@Injectable({
  providedIn: 'root',
})
export class TransformacionesService {
  private apiUrl = 'https://dragonball-api.com/api/transformations';

  constructor(private http: HttpClient) {}

  getTransformaciones(): Observable<Transformaciones[]> {
    return this.http.get<Transformaciones[]>(this.apiUrl);
  }
}