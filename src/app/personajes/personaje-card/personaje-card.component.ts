import { Component, Input } from '@angular/core';
import { Personaje } from '../Models/personaje.model';
import { Router } from '@angular/router';
import { OriginService } from '../services/origin.service';
import { Planet } from '../Models/planet';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.scss'],
})
export class PersonajeCardComponent {
  @Input() personaje!: Personaje;

  isModalOpen = false;
  originPlanet: Planet | null = null;

  constructor(
    private route: Router,
    private originService: OriginService
  ) {}

  handleTransformaciones(): void {
    this.route.navigate(['/transformaciones'], { queryParams: { id: this.personaje.id } });
  }

  openModal(): void {
    this.isModalOpen = true;
    this.loadOriginPlanet();
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.originPlanet = null;
  }

  private loadOriginPlanet(): void {
    this.originService.getOriginPlanetByCharacter(this.personaje.id).subscribe(
      (planet: Planet) => {
        this.originPlanet = planet;
      },
      (error) => {
        console.error('Error al obtener el planeta de origen:', error);
      }
    );
  }
}