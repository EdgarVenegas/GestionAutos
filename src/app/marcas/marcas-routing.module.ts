import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcasContainer} from './containers/marcas/marcas.container';
import { MarcasAdminContainer } from './containers/marcas-admin/marcas-admin.container';

const routes: Routes = [
    {
        path: '',
        component: MarcasContainer
    },
    {
      path: 'catalogo',
      component: MarcasAdminContainer
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
 export class MarcasRoutingModule { }
