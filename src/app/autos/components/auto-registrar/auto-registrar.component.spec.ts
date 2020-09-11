import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoRegistrarComponent } from './auto-registrar.component';

describe('AutoRegistrarComponent', () => {
  let component: AutoRegistrarComponent;
  let fixture: ComponentFixture<AutoRegistrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoRegistrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
