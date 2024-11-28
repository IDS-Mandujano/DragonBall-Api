import { Component, Input } from '@angular/core';
import { Personaje } from '../Models/personaje.model';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.scss'],
})
export class PersonajeCardComponent {
  @Input() personaje!: Personaje;

  handleTransformaciones(): void {
    console.log('Transformaciones clicked for:', this.personaje.name);
  }

  handleOrigen(): void {
    console.log('Origen clicked for:', this.personaje.name);
  }
}
