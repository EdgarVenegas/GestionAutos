import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcasAdminComponent } from './marcas-admin.component';

describe('MarcasAdminComponent', () => {
  let component: MarcasAdminComponent;
  let fixture: ComponentFixture<MarcasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarcasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
