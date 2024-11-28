import { Component,OnInit } from '@angular/core';
import { TransformacionesService } from '../services/transformaciones.service';
import { Transformaciones } from '../models/transformaciones';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit  {

  transformaciones: Transformaciones[] = [];

  constructor(private transformacionesService: TransformacionesService) {}

  ngOnInit(): void {
    this.transformacionesService
      .getTransformaciones()
      .subscribe((data) => (this.transformaciones = data));
  }

}
