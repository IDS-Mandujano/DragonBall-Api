import { Component, OnInit } from '@angular/core';
import { TransformacionesService } from '../services/transformaciones.service';
import { Transformaciones } from '../models/transformaciones';

@Component({
  selector: 'dashboard-transformation',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  transformaciones: Transformaciones[] = [];
  characterId: number = 1;

  constructor(private transformacionesService: TransformacionesService) {}

  ngOnInit(): void {
    this.transformacionesService
      .getTransformacionesByCharacter(this.characterId)
      .subscribe((data) => (this.transformaciones = data));
  }
}