import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonajeCardComponent } from './personaje-card/personaje-card.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalOriginComponent } from './modal-origin/modal-origin.component'; 


@NgModule({
  declarations: [
    DashboardComponent,
    PersonajeCardComponent,
    ListaPersonajesComponent,
    ModalOriginComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports : [
    DashboardComponent
  ]
})
export class PersonajesModule { }
