import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

// Componentes DEMO
import { DemoComponent} from './components/demo/demo.component';
import { DemoAutoComponent} from './components/demo.auto/auto.component';

// Compoentnes Padre / Hijo
import { AutosComponent } from './components/autos/autos.component';
import { AutoComponent} from './components/auto/auto.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    DemoAutoComponent,
    AutosComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
