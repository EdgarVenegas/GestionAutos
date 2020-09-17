import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersContainer } from './containers/users/users.container';
import { LoginContainer } from './containers/login/login.container';

const routes: Routes = [
  {
    path: '',
    component: UsersContainer
  },
  {
    path: 'login',
    component: LoginContainer
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
