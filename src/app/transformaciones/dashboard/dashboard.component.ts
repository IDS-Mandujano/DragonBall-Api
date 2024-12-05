import { Component, OnInit } from '@angular/core';
import { TransformacionesService } from '../services/transformaciones.service';
import { Transformaciones } from '../models/transformaciones';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dashboard-transformation',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  transformaciones: Transformaciones[] = [];
  characterId: number = 0;

  constructor(
    private transformacionesService: TransformacionesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.characterId = +this.route.snapshot.queryParamMap.get('id')!;
    this.fetchTransformaciones();
  }

  fetchTransformaciones(): void {
    this.transformacionesService.getTransformacionesByCharacter(this.characterId)
      .subscribe((data) => {
        this.transformaciones = data;
      });
  }
}