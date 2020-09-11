import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NotFoundComponent} from './shared/components/not-found/not-found.component';
import { LayoutComponent} from './layout/layout.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';

// Define todas las rutas dentro del proyecto
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'marcas',
        loadChildren: () => import('./marcas/marcas.module'). then (m => m.MarcasModule)
      },
      {
        path: 'autos',
        loadChildren: () => import('./autos/autos.module').then(m => m.AutosModule)
      }
    ]
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./home-admin/home-admin.module').then(m => m.HomeAdminModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module'). then (m => m.UsersModule)
      }
    ]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
