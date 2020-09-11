import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {

  constructor() { }
  title = 'GestionAutos';
  userName: string;
  isMaps(path): boolean {
    return false;
  }
  // tslint:disable-next-line: ban-types
  click(texto: String): void {
    console.log(texto);
  }
  ngOnInit(): void {
  }
}
