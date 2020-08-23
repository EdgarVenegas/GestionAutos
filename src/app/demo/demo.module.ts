import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoAutoComponent } from './components/demo.auto/auto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DemoAutoComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    FormsModule
  ]
})
export class DemoModule { }
