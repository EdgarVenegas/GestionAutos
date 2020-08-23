import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarcasComponent} from './components/marcas/marcas.component';

const routes: Routes = [
    {
        path: '',
        component: MarcasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
 export class MarcasRoutingModule { }
