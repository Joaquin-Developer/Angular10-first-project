import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { CompPruebaNgforComponent } from './comp-prueba-ngfor/comp-prueba-ngfor.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    CompPruebaNgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
