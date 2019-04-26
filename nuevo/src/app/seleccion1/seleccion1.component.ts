import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion1',
  templateUrl: './seleccion1.component.html',
  styleUrls: ['./seleccion1.component.css']
})
export class Seleccion1Component implements OnInit {
  selected = 'option2';
  constructor() { 
    
  }

  ngOnInit() {
  }

}
