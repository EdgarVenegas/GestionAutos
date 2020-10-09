import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';

import { AutoModel } from '@core/models/auto.model';
import { AutoInputModel  } from '@core/models/autoInput.model';
import { AutoEditModel } from '@core/models/autoEdit.model';

import { NotifyService } from './notify.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  constructor(
    private http: HttpClient,
    private notifyService: NotifyService
  ) { }
  registrarAuto(autoModel: AutoInputModel): void {
    console.log(autoModel.nombre);
    console.log(autoModel.numeroMotor);
    console.log(autoModel.fechaEsamble);
    console.log(autoModel.precioMercado);
    console.log(autoModel.marcaId);
    this.http.post(`${environment.UrlApi}Auto`, autoModel).subscribe(x => {
      console.log(x);
    });
  }
  editarAuto(editModel: AutoEditModel): Observable<Object> {
    return this.http.patch(`${environment.UrlApi}Auto`, editModel);
  }
  eliminarAuto(id: string): Observable<Object> {
    return this.http.delete(`${environment.UrlApi}Auto/${id}`);
  }
  getAllAutos(): Observable<AutoModel[]> {
    return this.http.get<AutoModel[]>(`${environment.UrlApi}Auto`);
  }
}
