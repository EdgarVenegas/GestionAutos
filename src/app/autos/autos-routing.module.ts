import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutosContainer} from '../autos/containers/autos/autos.container';
import { AutoDetailComponent } from '../autos/components/auto-detail/auto-detail.component';
import { AutosAdminContainer } from './containers/autos-admin/autos-admin.container';

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
    path: ':id',
    component: AutoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutosRoutingModule { }
