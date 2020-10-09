import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AutoModel } from '@core/models/auto.model';
import { AutoService } from '@core/services/auto.service';
import { NotifyService } from '@core/services/notify.service';

@Component({
  selector: 'app-autos-admin',
  templateUrl: './autos-admin.container.html',
  styleUrls: ['./autos-admin.container.scss']
})
// tslint:disable-next-line: component-class-suffix
export class AutosAdminContainer implements OnInit {
  autos: AutoModel[];
  constructor(
    private autoService: AutoService,
    private notifyService: NotifyService
  ) { }

  ngOnInit(): void {
    this.fetchdata();
    this.autoService.getAllAutos().subscribe(x => {
      this.autos = x;
    });
  }
  eliminarAuto(id: string): void {
    this.autoService.eliminarAuto(id).subscribe(x => {
      this.notifyService.mostrarNotificacion('success', 'Se elimino correctamente el auto con el ID: ' + id);
      this.fetchdata();
    });
  }
  fetchdata(): void {
    this.autoService.getAllAutos().subscribe(x => {
      this.autos = x;
    });
  }

}
