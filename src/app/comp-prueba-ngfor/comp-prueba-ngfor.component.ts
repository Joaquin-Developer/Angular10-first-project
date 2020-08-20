import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-prueba-ngfor',
  templateUrl: './comp-prueba-ngfor.component.html',
  styleUrls: ['./comp-prueba-ngfor.component.css']
})
export class CompPruebaNgforComponent implements OnInit {

  cursos: string[] = ["HTML", "CSS", "TS", "ANGULAR"];  // este array de strings lo vamos a iterar en el html con ngFor

  constructor() { }

  ngOnInit(): void {
  }

}
