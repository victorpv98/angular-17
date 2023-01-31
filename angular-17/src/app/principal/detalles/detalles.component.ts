import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Dato } from 'src/app/modelo/productos';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  valor = 0
  dato:string | null = ""
  datos:Array<Dato> = []
  filtrado:Array<Dato> = []
  constructor(
    private rutaActiva:ActivatedRoute,
    private router: Router) {
      this.router.events.subscribe((val) => {
        this.repeticion()
      });
    }
  ngOnInit(): void {
    
  }
  repeticion(){
    this.valor = this.rutaActiva.snapshot.params["id"]
    
    this.dato = localStorage.getItem('tutorial');
      
    if(typeof this.dato === 'string'){
      this.datos=JSON.parse(this.dato)
      this.filtrado =this.datos.filter(e => e.codigo == this.valor )
    }
  }
}
