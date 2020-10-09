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
import { DevextremeModule } from '@devextreme';
import { MaterialModule } from '@material';
import { FormsModule } from '@angular/forms';

import { EditarAutoComponent } from './components/editar-auto/editar-auto.component';
import { EditarAutoContainer } from './containers/editar-auto/editar-auto.container';


@NgModule({
  declarations: [
    AutoComponent,
    AutoDetailComponent,
    RegistrarAutoComponent,
    AutosContainer,
    AutosAdminContainer,
    RegistrarAutoContainer,
    EditarAutoComponent,
    EditarAutoContainer
  ],
  imports: [
    CommonModule,
    AutosRoutingModule,
    SharedModule,
    DevextremeModule,
    FormsModule,
    MaterialModule
  ]
})
export class AutosModule { }
