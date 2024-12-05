import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transformaciones } from '../models/transformaciones';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() transformacion!: Transformaciones;
  @Output() transformacionUpdated = new EventEmitter<Transformaciones>();
  isModalOpen: boolean = false;
  editKi: string = '';

  openEditModal(transformacion: Transformaciones) {
    this.editKi = transformacion.ki;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.transformacion.ki = this.editKi;
    this.transformacionUpdated.emit(this.transformacion);
    this.closeModal();
  }
}