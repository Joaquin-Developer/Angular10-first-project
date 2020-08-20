import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  // exporto las variables:
  textoTitulo: string = "Problema: Contador - Ejercicio 1";
  contador: number = 0;

  ngOnInit(): void {
  }

}
