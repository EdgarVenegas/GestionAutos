import { Injectable } from '@angular/core';
import { LoginInputModel } from '@core/models/loginInputModel.model';
import { IResponseOfLoginResponse } from '@core/models/iResponseOfLoginResponse.model';
import { HttpClient } from '@angular/common/http';
import { catchError, flatMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from '@environments';
import { StorageService } from './storage.service';
import { LoginResponse } from '@core/models/loginresponse.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }
  iniciarSesion(loginModel: LoginInputModel): Observable<IResponseOfLoginResponse> {
    // fetch('http://local.codemexico.mx:8081/GestionAutos/api/Auth/IniciarSesion',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify(loginModel),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     }
    //   })
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //   .catch(error => console.log(error));
    return this.http
      .post<IResponseOfLoginResponse>(`${environment.UrlApi}Auth/IniciarSesion`, loginModel);
  }
  cerrarSesion(): void {
    this.storage.removeJsonItem('User');
  }
  guardarUsuario(loginResponse: LoginResponse): void {
    this.storage.setJsonValue('User', loginResponse);
  }
  getUser(): LoginResponse {
    const data: LoginResponse = this.storage.getJsonValue('User');
    return data;
  }
  isAuthenticated(): boolean {
    const user = this.storage.getJsonValue('User');
    if (user) {
      return true;
    }
    return false;
  }
}
