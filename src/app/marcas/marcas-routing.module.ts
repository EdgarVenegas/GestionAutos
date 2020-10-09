import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcasContainer} from './containers/marcas/marcas.container';
import { MarcasAdminContainer } from './containers/marcas-admin/marcas-admin.container';
import { RegistrarMarcaContainer } from './containers/registrar-marca/registrar-marca.container';
import { EditarMarcaContainer } from './containers/editar-marca/editar-marca.container';
import { EditarMarcaComponent } from './components/editar-marca/editar-marca.component';

const routes: Routes = [
    {
        path: '',
        component: MarcasContainer
    },
    {
      path: 'catalogo',
      component: MarcasAdminContainer
    },
    {
        path: 'catalogo/registrar',
        component: RegistrarMarcaContainer
    },
    {
        path: 'catalogo/editar/:id',
        component: EditarMarcaContainer
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
 export class MarcasRoutingModule { }
