import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMarcaComponent } from './registrar-marca.component';

describe('RegistrarMarcaComponent', () => {
  let component: RegistrarMarcaComponent;
  let fixture: ComponentFixture<RegistrarMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
