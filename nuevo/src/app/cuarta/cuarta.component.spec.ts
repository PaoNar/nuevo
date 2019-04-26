import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuartaComponent } from './cuarta.component';

describe('CuartaComponent', () => {
  let component: CuartaComponent;
  let fixture: ComponentFixture<CuartaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuartaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
