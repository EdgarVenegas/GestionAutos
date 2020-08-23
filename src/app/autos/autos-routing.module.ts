import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AutosComponent } from './components/autos/autos.component';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AutosComponent
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
