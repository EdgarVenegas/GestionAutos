import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

import { LoginContainer } from './containers/login/login.container';
import { UsersContainer } from './containers/users/users.container';

import { DevextremeModule } from '@devextreme';


@NgModule({
  declarations: [LoginComponent, UserComponent, UserDetailComponent, LoginContainer, UsersContainer],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DevextremeModule
  ]
})
export class UsersModule { }
