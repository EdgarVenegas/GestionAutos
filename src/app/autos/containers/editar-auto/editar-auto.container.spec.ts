import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAutoContainer } from './editar-auto.container';

describe('EditarAutoContainer', () => {
  let component: EditarAutoContainer;
  let fixture: ComponentFixture<EditarAutoContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAutoContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarAutoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
