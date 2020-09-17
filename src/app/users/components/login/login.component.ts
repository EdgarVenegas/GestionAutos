import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LoginModel } from '@core/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnChanges {

  @Input() imagen: string;
  @Input() model: LoginModel;
  opciones = {
    onValueChanges: 'fechaCambio()'
  };

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hay cambios');
    console.log(changes);
  }

  ngOnInit(): void {
  }

  iniciarSesion(): void {
    console.log(this.model);
  }

  fechaCambio(): void {
    console.log('Cambio la fecha');
  }

}
