import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './containers/not-found-page';
import {LoginComponent} from "./containers/login";
import {UnavailableComponent} from "./containers/unavailable";
import {UserInfoComponent} from "./containers/user-info";
import {AuthGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user',
    component: UserInfoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'unavailable',
    component: UnavailableComponent
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }


];
