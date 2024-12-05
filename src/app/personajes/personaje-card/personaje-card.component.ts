import { Component, Input, ViewChild } from '@angular/core';
import { Personaje } from '../Models/personaje.model';
import { Router } from '@angular/router';
import { ModalOriginComponent } from '../modal-origin/modal-origin.component';
import { OriginService } from '../services/origin.service';
import { Planet } from '../Models/planet';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.scss'],
})
export class PersonajeCardComponent {
  @Input() personaje!: Personaje;
  @ViewChild(ModalOriginComponent) modalOrigen!: ModalOriginComponent;
  
  constructor(
    private route: Router,
    private origin: OriginService
  ) {}

  handleTransformaciones(): void {
    this.route.navigate(['/transformaciones'], { queryParams: { id: this.personaje.id } });
  }

  handleOrigen(): void {
    this.origin.getOriginPlanetByCharacter(this.personaje.id).subscribe(
      (planet: Planet) => {
        console.log(planet)
      },
      (error) => {
        console.error('Error al obtener el planeta de origen:', error);
      }
    );
  }
}
