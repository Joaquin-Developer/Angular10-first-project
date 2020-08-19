import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto1';
  show: boolean = true; // declaramos e iniciamos en true la variable show que se exportará.
}
