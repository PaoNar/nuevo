import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  paraleloa: string;
  semestre: number;
  paralelob: string;
 
}

const ELEMENT_DATA: PeriodicElement[] = [
  {semestre: 1, paraleloa: 'Hydrogen',  paralelob: 'H'},
  {semestre: 2, paraleloa: 'Helium',  paralelob:  'He'},
  {semestre: 3, paraleloa: 'Lithium',  paralelob: 'Li'},
  {semestre: 4, paraleloa: 'Beryllium',  paralelob: 'Be'},
  {semestre: 5, paraleloa: 'Boron',  paralelob: 'B'},
  {semestre: 6, paraleloa: 'Carbon',  paralelob:'C'},
  {semestre: 7, paraleloa: 'Nitrogen',  paralelob: 'N'},
  {semestre: 8, paraleloa: 'Oxygen',  paralelob:'O'},
  {semestre: 9, paraleloa: 'Fluorine',  paralelob:'F'},
  {semestre: 10, paraleloa: 'Neon',  paralelob:'Ne'},
];

@Component({
  selector: 'app-segundapantalla',
  templateUrl: './segundapantalla.component.html',
  styleUrls: ['./segundapantalla.component.css']
})
export class SegundapantallaComponent implements OnInit {
  displayedColumns: string[] = ['semestre', 'paraleloa', 'paralelob'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
