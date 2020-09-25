import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginContainer } from './login.container';

describe('LoginComponent', () => {
  let component: LoginContainer;
  let fixture: ComponentFixture<LoginContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
