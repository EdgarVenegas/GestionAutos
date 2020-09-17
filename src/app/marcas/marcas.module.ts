import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from './marcas-routing.module';

import { MarcaComponent } from './components/marca/marca.component';
import { MarcaDetailComponent } from './components/marca-detail/marca-detail.component';

import { MarcasContainer } from './containers/marcas/marcas.container';
import { MarcasAdminContainer } from './containers/marcas-admin/marcas-admin.container';


@NgModule({
  declarations: [
    MarcaComponent,
    MarcaDetailComponent,
    MarcasContainer,
    MarcasAdminContainer
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule
  ]
})
export class MarcasModule { }
