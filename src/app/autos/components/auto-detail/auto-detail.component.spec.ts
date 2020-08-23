import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDetailComponent } from './auto-detail.component';

describe('AutoDetailComponent', () => {
  let component: AutoDetailComponent;
  let fixture: ComponentFixture<AutoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
