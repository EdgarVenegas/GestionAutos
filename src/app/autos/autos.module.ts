import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosRoutingModule } from './autos-routing.module';

import { AutoComponent } from '../autos/components/auto/auto.component';
import { AutoDetailComponent } from '../autos/components/auto-detail/auto-detail.component';
import { RegistrarAutoComponent } from './components/registrar-auto/registrar-auto.component';

import { AutosContainer} from '../autos/containers/autos/autos.container';
import { AutosAdminContainer} from './containers/autos-admin/autos-admin.container';
import { RegistrarAutoContainer } from './containers/registrar-auto/registrar-auto.container';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AutoComponent,
    AutoDetailComponent,
    RegistrarAutoComponent,
    AutosContainer,
    AutosAdminContainer,
    RegistrarAutoContainer
  ],
  imports: [
    CommonModule,
    AutosRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AutosModule { }
