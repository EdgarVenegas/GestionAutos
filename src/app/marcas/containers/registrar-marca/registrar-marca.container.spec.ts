import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMarcaContainer } from './registrar-marca.container';

describe('RegistrarMarcaComponent', () => {
  let component: RegistrarMarcaContainer;
  let fixture: ComponentFixture<RegistrarMarcaContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarMarcaContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMarcaContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
