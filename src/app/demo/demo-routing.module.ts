import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoAutoComponent } from './components/demo.auto/auto.component';

const routes: Routes = [
  {
    path: '',
    component: DemoAutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
