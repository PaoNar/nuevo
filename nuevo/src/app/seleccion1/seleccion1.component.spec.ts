import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Seleccion1Component } from './seleccion1.component';

describe('Seleccion1Component', () => {
  let component: Seleccion1Component;
  let fixture: ComponentFixture<Seleccion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seleccion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Seleccion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
