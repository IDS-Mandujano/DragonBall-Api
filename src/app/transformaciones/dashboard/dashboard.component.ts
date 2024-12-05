import { Component, OnInit } from '@angular/core';
import { TransformacionesService } from '../services/transformaciones.service';
import { Transformaciones } from '../models/transformaciones';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../../personajes/services/personajes.service';

@Component({
  selector: 'dashboard-transformation',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  transformaciones: Transformaciones[] = [];
  personajes: any[] = [];
  characterId: number = 0;

  constructor(
    private transformacionesService: TransformacionesService,
    private personajesService: PersonajesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.personajesService.getPersonajes().subscribe((data) => {
      this.personajes = data;
      this.characterId = +this.route.snapshot.queryParamMap.get('id')!;
      if (!this.characterId) {
        this.characterId = this.personajes[0]?.id;
      }
      this.fetchTransformaciones();
    });
  }
  
  fetchTransformaciones(): void {
    const storedTransformaciones = localStorage.getItem(`transformaciones-${this.characterId}`);
    if (storedTransformaciones) {
      this.transformaciones = JSON.parse(storedTransformaciones);
    } else {
      this.transformacionesService.getTransformacionesByCharacter(this.characterId)
        .subscribe((data) => {
          this.transformaciones = data;
          this.saveTransformaciones();
        });
    }
  }
  
  saveTransformaciones(): void {
    localStorage.setItem(`transformaciones-${this.characterId}`, JSON.stringify(this.transformaciones));
  }  

  goBack(): void {
    const currentIndex = this.personajes.findIndex(p => p.id === this.characterId);
    if (currentIndex > 0) {
      this.characterId = this.personajes[currentIndex - 1].id;
      this.router.navigate([], {
        queryParams: { id: this.characterId },
        queryParamsHandling: 'merge',
      });
      this.fetchTransformaciones();
    }
  }

  goForward(): void {
    const currentIndex = this.personajes.findIndex(p => p.id === this.characterId);
    if (currentIndex < this.personajes.length - 1) {
      this.characterId = this.personajes[currentIndex + 1].id;
      this.router.navigate([], {
        queryParams: { id: this.characterId },
        queryParamsHandling: 'merge',
      });
      this.fetchTransformaciones();
    }
  }

  goHome(): void {
    this.router.navigate(['/']);
  }

  updateTransformacion(updatedTransformacion: Transformaciones): void {
    const index = this.transformaciones.findIndex(t => t.id === updatedTransformacion.id);
    if (index !== -1) {
      this.transformaciones[index] = updatedTransformacion;
      this.saveTransformaciones();
    }
  }
}
