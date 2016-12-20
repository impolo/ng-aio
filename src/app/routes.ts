import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './containers/not-found-page';
import {LoginComponent} from "./containers/login";
import {UnavailableComponent} from "./containers/unavailable";
import {NmcStoreInfoComponent} from "./containers/store-info";
import {AuthGuard} from "./guards/auth.guard";

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'storeInfo',
    component: NmcStoreInfoComponent,
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
