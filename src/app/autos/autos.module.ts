import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutosRoutingModule } from './autos-routing.module';

import { AutoComponent } from './components/auto/auto.component';
import { AutosComponent} from './components/autos/autos.component';
import { AutoDetailComponent } from './components/auto-detail/auto-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    AutoComponent,
    AutosComponent,
    AutoDetailComponent
  ],
  imports: [
    CommonModule,
    AutosRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class AutosModule { }
