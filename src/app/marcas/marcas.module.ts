import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from './marcas-routing.module';

import { MarcaComponent } from './components/marca/marca.component';
import { MarcaDetailComponent } from './components/marca-detail/marca-detail.component';
import { RegistrarMarcaComponent } from './components/registrar-marca/registrar-marca.component';

import { MarcasContainer } from './containers/marcas/marcas.container';
import { MarcasAdminContainer } from './containers/marcas-admin/marcas-admin.container';
import { RegistrarMarcaContainer } from './containers/registrar-marca/registrar-marca.container';

import { DevextremeModule } from '@devextreme';
import { MaterialModule } from '@material';
import { FormsModule } from '@angular/forms';

import { EditarMarcaComponent } from './components/editar-marca/editar-marca.component';
import { EditarMarcaContainer } from './containers/editar-marca/editar-marca.container';


@NgModule({
  declarations: [
    MarcaComponent,
    MarcaDetailComponent,
    RegistrarMarcaComponent,
    MarcasContainer,
    MarcasAdminContainer,
    RegistrarMarcaContainer,
    EditarMarcaComponent,
    EditarMarcaContainer
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule,
    DevextremeModule,
    FormsModule,
    MaterialModule
  ]
})
export class MarcasModule { }
