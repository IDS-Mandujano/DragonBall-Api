import { Component, Input } from '@angular/core';
import { Personaje } from '../Models/personaje.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.scss'],
})
export class PersonajeCardComponent {
  @Input() personaje!: Personaje;

  constructor(private route: Router) {}

  handleTransformaciones(): void {
    this.route.navigate(['/transformaciones'], { queryParams: { id: this.personaje.id } });
  }

  handleOrigen(): void {
    console.log('Origen clicked for:', this.personaje.name);
  }
}
