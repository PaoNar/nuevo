import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tablapantalla4Component } from './tablapantalla4.component';

describe('Tablapantalla4Component', () => {
  let component: Tablapantalla4Component;
  let fixture: ComponentFixture<Tablapantalla4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tablapantalla4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tablapantalla4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
