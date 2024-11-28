import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PersonajesModule } from "../personajes/personajes.module";
import { TransformacionesModule } from "../transformaciones/transformaciones.module";



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PersonajesModule,
    TransformacionesModule
],
  exports : [
    HomeComponent
  ]
})
export class HomeModule { }
