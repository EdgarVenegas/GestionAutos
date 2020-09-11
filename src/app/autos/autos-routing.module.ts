import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutosContainer} from '../autos/container/autos/autos.container';
import { AutoDetailComponent } from '../autos/components/auto-detail/auto-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AutosContainer
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
