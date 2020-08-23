import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcasRoutingModule } from './marcas-routing.module';

import { MarcaComponent } from './components/marca/marca.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { MarcaDetailComponent } from './components/marca-detail/marca-detail.component';

@NgModule({
  declarations: [
    MarcaComponent,
    MarcasComponent,
    MarcaDetailComponent
  ],
  imports: [
    CommonModule,
    MarcasRoutingModule
  ]
})
export class MarcasModule { }
