import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  paraleloa: string;
  semestre: number;
  paralelob: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {semestre: 1, paraleloa: 'Hydrogen', paralelob: '1.0079'},
  {semestre: 2, paraleloa: 'Helium', paralelob: '4.0026'},
  {semestre: 3, paraleloa: 'Lithium', paralelob: '6.941'},
  {semestre: 4, paraleloa: 'Beryllium', paralelob: '9.0'},
  {semestre: 5, paraleloa: 'Boron', paralelob:  'B'},
  {semestre: 6, paraleloa: 'Carbon', paralelob:  'C'},
  {semestre: 7, paraleloa: 'Nitrogen', paralelob:  'N'},
  {semestre: 8, paraleloa: 'Oxygen', paralelob: 'O'},
  {semestre: 9, paraleloa: 'Fluorine', paralelob:  'F'},
  {semestre: 10, paraleloa: 'Neon', paralelob:  'Ne'},
];
@Component({
  selector: 'app-tabla2',
  templateUrl: './tabla2.component.html',
  styleUrls: ['./tabla2.component.css']
})
export class Tabla2Component implements OnInit {
  displayedColumns: string[] = ['semestre', 'paraleloa', 'paralelob'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
