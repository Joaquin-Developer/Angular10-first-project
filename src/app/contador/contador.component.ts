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
  verHola: boolean = false;
  verAdios: boolean = false;
  letraEjercicio: string = "Si el contador es mayor o igual a 15, mostramos el boton Hola, y si es menor o igual a -10, " 
  + "mostramos el boton Adios";
  fondo: string = "";
  
  ngOnInit(): void {
  }

}
/**
function name() {
  if()
}

var btnIncremento = document.getElementById('btnFun1');
var btnDecremento = document.getElementById('btnFun2');
btnIncremento.onclick = function() { name(); };
btnDecremento.onclick = function() { name(); };....

 */