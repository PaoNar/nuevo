import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nombre: string;
  position: number;
  cedula: number;
  direccion: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nombre: 'matematica', cedula: 10, direccion: 'aprobado'},
  {position: 2, nombre: 'Helium', cedula: 4.0026, direccion: 'He'},
  {position: 3, nombre: 'Lithium', cedula: 6.941, direccion: 'Li'},
  {position: 4, nombre: 'Beryllium', cedula: 9.0122, direccion: 'Be'},
  {position: 5, nombre: 'Boron', cedula: 10.811, direccion: 'B'},
  {position: 6, nombre: 'Carbon', cedula: 12.0107, direccion: 'C'},
  {position: 7, nombre: 'Nitrogen', cedula: 14.0067, direccion: 'N'},
  {position: 8, nombre: 'Oxygen', cedula: 15.9994, direccion: 'O'},
  {position: 9, nombre: 'Fluorine', cedula: 18.9984, direccion: 'F'},
  {position: 10, nombre: 'Neon', cedula: 20.1797, direccion: 'Ne'},
];

@Component({
  selector: 'app-tablapantalla3',
  templateUrl: './tablapantalla3.component.html',
  styleUrls: ['./tablapantalla3.component.css']
})
export class Tablapantalla3Component implements OnInit {
  displayedColumns: string[] = ['position', 'nombre', 'cedula', 'direccion'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
