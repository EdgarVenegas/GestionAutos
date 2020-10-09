import { Component, OnInit } from '@angular/core';
import { AutoInputModel } from '@core/models/autoInput.model';
import { AutoService } from '@core/services/auto.service';

@Component({
  selector: 'app-registrar-container-auto',
  templateUrl: './registrar-auto.container.html',
  styleUrls: ['./registrar-auto.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class RegistrarAutoContainer implements OnInit {
  autoModel: AutoInputModel = {
    nombre: '',
    numeroMotor: '',
    fechaEsamble: '',
    precioMercado: 0,
    marcaId: ''
  };
  constructor(
    private autoService: AutoService
  ) { }

  ngOnInit(): void {
  }

  registrarAuto(): void {
    this.autoService.registrarAuto(this.autoModel);
  }

}
