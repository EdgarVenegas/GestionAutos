import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosRoutingModule } from './autos-routing.module';

import { AutoComponent } from '../autos/components/auto/auto.component';
import { AutosContainer} from '../autos/container/autos/autos.container';
import { AutoDetailComponent } from '../autos/components/auto-detail/auto-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { RegistrarAutoComponent} from './container/registrar-auto/registrar-auto.component';
import { AutoRegistrarComponent } from './components/auto-registrar/auto-registrar.component';

@NgModule({
  declarations: [
    AutoComponent,
    AutosContainer,
    AutoDetailComponent,
    RegistrarAutoComponent,
    AutoRegistrarComponent
  ],
  imports: [
    CommonModule,
    AutosRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AutosModule { }
