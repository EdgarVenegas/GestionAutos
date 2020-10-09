import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MarcaEditModel } from '@core/models/marcaEdit.model';
import { MarcaService } from '@core/services/marca.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-editar-container-marca',
  templateUrl: './editar-marca.container.html',
  styleUrls: ['./editar-marca.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class EditarMarcaContainer implements OnInit {

  idMarca: string;
  editMarcaModel: MarcaEditModel = {
    idMarca: '',
    nombre: ''
  };
  constructor(
    private route: ActivatedRoute,
    private marcaService: MarcaService,
    private notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idMarca = params.id;
    });
  }

  editar(): void {
    this.editMarcaModel.idMarca = this.idMarca;
    this.marcaService.editarMarca(this.editMarcaModel).subscribe(x => {
      this.notifyService.mostrarNotificacion('info', 'Se edito el registro con el ID' + this.idMarca);
    });
  }

}
