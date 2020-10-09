import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutoDetailComponent } from '../autos/components/auto-detail/auto-detail.component';
import { EditarAutoComponent } from './components/editar-auto/editar-auto.component';
import { AutosContainer} from '../autos/containers/autos/autos.container';
import { AutosAdminContainer } from './containers/autos-admin/autos-admin.container';
import { RegistrarAutoComponent } from './components/registrar-auto/registrar-auto.component';

const routes: Routes = [
  {
    path: '',
    component: AutosContainer
  },
  {
    path: 'catalogo',
    component: AutosAdminContainer
  },
  {
    path: 'catalogo/registrar',
    component: RegistrarAutoComponent
  },
  {
      path: 'catalogo/editar',
      component: EditarAutoComponent
  },
  {
    path: ':id',
    component: AutoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule { }
