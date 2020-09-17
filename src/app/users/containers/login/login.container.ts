import { Component, OnInit } from '@angular/core';
import { LoginModel } from '@core/models/login.model';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class LoginContainer implements OnInit {

  imagen = './assets/images/perfil.jpg';
  model: LoginModel = {
    Password: '',
    Username: '',
    FechaNacimiento: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
