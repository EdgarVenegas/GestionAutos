import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';

import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SidebarAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SidebarAdminComponent,
    RouterModule
  ]
})
export class SharedModule {}
