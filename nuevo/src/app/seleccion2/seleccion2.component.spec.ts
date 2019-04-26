import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seleccion2Component } from './seleccion2.component';

describe('Seleccion2Component', () => {
  let component: Seleccion2Component;
  let fixture: ComponentFixture<Seleccion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seleccion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seleccion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
