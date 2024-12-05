import { Component } from '@angular/core';
import { Planet } from '../Models/planet';

@Component({
  selector: 'app-modal-origin',
  templateUrl: './modal-origin.component.html',
  styleUrl: './modal-origin.component.css'
})
export class ModalOriginComponent {
  open(planet: Planet) {
    throw new Error('Method not implemented.');
  }

}
