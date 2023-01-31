import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }
  array:any=[]
  registroform = this.formbuilder.group({
    nombres: [''],
    correo: [''],
    telefono: [''],
    pais: [''],
    existencia: [''],
  })
  pais = ["peru","chile","mexico","argentina","venezuela","panama","guatemala"]
  send(){
    
    this.array.push(this.registroform.value)
    
    localStorage.setItem("usuario", JSON.stringify(this.array));
    
  }
}
