import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './principal/principal.component';
import { BarraComponent } from './barra/barra.component';
import { BotonInicioComponent } from './boton-inicio/boton-inicio.component';
import { Seleccion1Component } from './seleccion1/seleccion1.component';
import { Seleccion2Component } from './seleccion2/seleccion2.component';
import { SegundapantallaComponent } from './segundapantalla/segundapantalla.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import { TerceraComponent } from './tercera/tercera.component';
import { CuartaComponent } from './cuarta/cuarta.component';
import { Tabla2Component } from './tabla2/tabla2.component';
import { Tablapantalla3Component } from './tablapantalla3/tablapantalla3.component';
import { Tablapantalla4Component } from './tablapantalla4/tablapantalla4.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    BarraComponent,
    BotonInicioComponent,
    Seleccion1Component,
    Seleccion2Component,
    SegundapantallaComponent,
    TerceraComponent,
    CuartaComponent,
    Tabla2Component,
    Tablapantalla3Component,
    Tablapantalla4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
