import { Component, Input, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Home', icon: 'house', class: '' },
  { path: 'users', title: 'Usuarios', icon: 'person', class: '' },
  { path: 'autos/catalogo', title: 'Autos', icon: 'directions_car', class: '' },
  { path: 'marcas/catalogo', title: 'Marcas', icon: 'beenhere', class: '' }
];

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {

  @Input() Username: string;
  menuItems: any[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu(): boolean {
    if (window.outerWidth > 991) {
      return false;
    }
    return true;
  }

}
