import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/productos';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(private formbuilder:FormBuilder,private router:Router) { }
  registroform = this.formbuilder.group({
    pais: [''],
  })
  usuario:Array<Usuario> = []
  ngOnInit(): void {
    let datos = localStorage.getItem("usuario")
    if( typeof datos === "string"){
      this.usuario = JSON.parse(datos)
      console.log(this.usuario)
    }
  }
  pais = ["peru","chile","mexico","argentina","venezuela","panama","guatemala"]
  send(){
   let paisfiltrar = this.registroform.value.pais 
   this.router.navigate(['/filtrado', paisfiltrar])
  }
}
