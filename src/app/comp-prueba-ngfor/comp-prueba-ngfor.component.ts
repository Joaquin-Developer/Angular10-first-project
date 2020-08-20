import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-prueba-ngfor',
  templateUrl: './comp-prueba-ngfor.component.html',
  styleUrls: ['./comp-prueba-ngfor.component.css']
})
export class CompPruebaNgforComponent implements OnInit {

  cursos: string[] = ["HTML", "CSS", "TS", "ANGULAR"];  // este array de strings lo vamos a iterar en el html con ngFor

  animales: Array<any> = [
    {tipo: "Perro", nombre: "Tomy", edad: 2},
    {tipo: "Perro", nombre: "Arya", edad: 1},
    {tipo: "Gato", nombre: "Manchitas", edad: 5}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
