import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAutoComponent } from './registrar-auto.component';

describe('RegistrarAutoComponent', () => {
  let component: RegistrarAutoComponent;
  let fixture: ComponentFixture<RegistrarAutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarAutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
