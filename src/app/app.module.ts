import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './containers/app.component';
import { ComponentsModule } from './components';
import { routes } from './routes';
import {RouterModule} from "@angular/router";
import {NotFoundPageComponent} from "./containers/not-found-page";
import {UnavailableComponent} from "./containers/unavailable";
import {UserInfoComponent} from "./containers/user-info";
import {AuthGuard} from "./guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    UnavailableComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    MaterialModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
