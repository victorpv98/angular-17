import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.datos.map((e,index)=>{
      let total
      total = e.precioV - e.precioC
      this.datos[index].gananacia = total
    })
    localStorage.setItem('tutorial', JSON.stringify(this.datos));
  }

  datos = [
    {
      codigo:1,
      descripcion:"galletas chokis",
      precioC:10,
      precioV:15,
      gananacia:0,
      existencia: 100,
    },
    {
      codigo:2,
      descripcion:"mermelada de fresa",
      precioC:65,
      precioV:80,
      gananacia:0,
      existencia: 100,
    },
    {
      codigo:3,
      descripcion:"aceite",
      precioC:18,
      precioV:20,
      gananacia:0,
      existencia: 100,
    },
    {
      codigo:4,
      descripcion:"palomitas de maiz",
      precioC:12,
      precioV:15,
      gananacia:0,
      existencia: 100,
    },
    {
      codigo:5,
      descripcion:"doritos",
      precioC:5,
      precioV:8,
      gananacia:0,
      existencia: 100,
    },
  ]
}
