import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMarcaContainer } from './editar-marca.container';

describe('EditarMarcaContainer', () => {
  let component: EditarMarcaContainer;
  let fixture: ComponentFixture<EditarMarcaContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMarcaContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMarcaContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
