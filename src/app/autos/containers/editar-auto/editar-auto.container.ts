import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AutoEditModel } from '@core/models/autoEdit.model';
import { AutoService } from '@core/services/auto.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-editar-container-auto',
  templateUrl: './editar-auto.container.html',
  styleUrls: ['./editar-auto.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class EditarAutoContainer implements OnInit {

  idAuto: string;
  editAutoModel: AutoEditModel = {
    autoId: '',
    nombre: '',
    numeroMotor: '',
    fechaEsamble: '',
    precioMercado: 0,
    marcaId: ''
  };
  constructor(
    private route: ActivatedRoute,
    private autoService: AutoService,
    private notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idAuto = params.id;
    });
  }

  editar(): void {
    this.editAutoModel.autoId = this.idAuto;
    this.autoService.editarAuto(this.editAutoModel).subscribe(x => {
      this.notifyService.mostrarNotificacion('info', 'Se edito el registro del Auto con el ID' + this.idAuto);
    });
  }

}
