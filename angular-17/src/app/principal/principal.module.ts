import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { DetallesComponent } from './detalles/detalles.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FiltradoComponent } from './filtrado/filtrado.component';


@NgModule({
  declarations: [
    TablaComponent,
    DetallesComponent,
    NavComponent,
    HomeComponent,
    ContactoComponent,
    MensajesComponent,
    FiltradoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    TablaComponent,
    DetallesComponent,
    NavComponent
  ]
})
export class PrincipalModule { }
