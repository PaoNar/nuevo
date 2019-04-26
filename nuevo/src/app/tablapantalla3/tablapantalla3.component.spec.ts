import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablapantalla3Component } from './tablapantalla3.component';

describe('Tablapantalla3Component', () => {
  let component: Tablapantalla3Component;
  let fixture: ComponentFixture<Tablapantalla3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablapantalla3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablapantalla3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
