import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAdminRoutingModule } from './home-admin-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '@shared/shared.module';
import { MaterialModule } from '@material';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeAdminRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeAdminModule { }
