import { Component, Input } from '@angular/core';
import { Transformaciones } from '../models/transformaciones';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() transformacion!: Transformaciones;
  isModalOpen: boolean = false;
  editKi: string = '';

  openEditModal(transformacion: Transformaciones) {
    this.editKi = transformacion.ki;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit() {
    console.log('Nuevo Ki:', this.editKi);
    this.closeModal();
  }
}