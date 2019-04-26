import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerceraComponent } from './tercera.component';

describe('TerceraComponent', () => {
  let component: TerceraComponent;
  let fixture: ComponentFixture<TerceraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
