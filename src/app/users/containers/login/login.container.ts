import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LoginInputModel } from '@core/models/loginInputModel.model';
import { NotifyService } from '@core/services/notify.service';
import { UserService } from '@core/services/user.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login.container.html',
  styleUrls: ['./login.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class LoginContainer implements OnInit {

  imagen = './assets/images/perfil.jpg';
  model: LoginInputModel = {
    password: '',
    correoElectronico: ''
  };

  constructor(
    private userService: UserService,
    private route: Router,
    private notifyService: NotifyService
  ) { }
  ngOnInit(): void {
  }

  login(): void {
    this.userService.iniciarSesion(this.model).subscribe(response => {
      this.userService.guardarUsuario(response.dataResponse);
      this.notifyService.mostrarNotificacion('success', `Bienvenido ${response.dataResponse.username}`);
      setTimeout(() => this.route.navigate(['/admin/home']), 3000);
    });
  }

}
