import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments';

import { MarcaModel } from '@core/models/marca.model';
import { MarcaInputModel } from '@core/models/marcaInput.model';
import { MarcaEditModel } from '@core/models/marcaEdit.model';

import { NotifyService } from './notify.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(
    private http: HttpClient,
    private notifyService: NotifyService
  ) { }
  registrarMarca(marcaModel: MarcaInputModel): void {
    console.log(marcaModel.nombre);
    this.http.post(`${environment.UrlApi}Marca`, marcaModel).subscribe(x => {
      console.log(x);
    });
  }
  editarMarca(editModel: MarcaEditModel): Observable<Object> {
    return this.http.patch(`${environment.UrlApi}Marca`, editModel);
  }
  eliminarMarca(id: string): Observable<Object> {
    return this.http.delete(`${environment.UrlApi}Marca/${id}`);
  }
  getAllMarcas(): Observable<MarcaModel[]> {
    return this.http.get<MarcaModel[]>(`${environment.UrlApi}Marca`);
  }
}
