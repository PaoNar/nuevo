import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundapantallaComponent } from './segundapantalla.component';

describe('SegundapantallaComponent', () => {
  let component: SegundapantallaComponent;
  let fixture: ComponentFixture<SegundapantallaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundapantallaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundapantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
