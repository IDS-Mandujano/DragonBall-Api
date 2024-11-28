import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../services/personajes.service';
import { Personaje } from '../Models/personaje.model';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss'],
})
export class ListaPersonajesComponent implements OnInit {
  personajes: Personaje[] = []; 

  constructor(private personajesService: PersonajesService) {}

  ngOnInit(): void {
    this.personajesService.getPersonajes().subscribe({
      next: (data) => {
        this.personajes = data;
      },
      error: (err) => console.error('Error al obtener los personajes:', err),
    });
  }
}
