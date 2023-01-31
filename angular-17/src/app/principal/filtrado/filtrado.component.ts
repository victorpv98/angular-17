import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelo/productos';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {

  constructor(private rutaActiva:ActivatedRoute) { }
  usuario:Array<Usuario> = []
  valor = ""
  filtrado:Array<Usuario> = []
  ngOnInit(): void {
    let datos = localStorage.getItem("usuario")
    this.valor = this.rutaActiva.snapshot.params["id"]
    if( typeof datos === "string"){
      this.usuario = JSON.parse(datos)
      this.filtrado =this.usuario.filter(e => e.pais == this.valor )
      console.log(this.usuario)
    }
    
  }

}
