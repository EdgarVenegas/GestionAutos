import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  constructor(
    private http: HttpClient
  ) { }
}
