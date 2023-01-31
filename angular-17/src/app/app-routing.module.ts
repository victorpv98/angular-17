import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './principal/contacto/contacto.component';
import { DetallesComponent } from './principal/detalles/detalles.component';
import { FiltradoComponent } from './principal/filtrado/filtrado.component';
import { HomeComponent } from './principal/home/home.component';
import { MensajesComponent } from './principal/mensajes/mensajes.component';

const routes: Routes = [
  {path:"detalles/:id",component:DetallesComponent},
  {path:"",component:HomeComponent},
  {path:"contacto",component:ContactoComponent},
  {path:"mensajes",component:MensajesComponent},
  {path:"filtrado/:id",component:FiltradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
