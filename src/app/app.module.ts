import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './containers/app.component';
import { ComponentsModule } from './components';
import { routes } from './routes';
import {RouterModule} from "@angular/router";
import {NotFoundPageComponent} from "./containers/not-found-page";
import {UnavailableComponent} from "./containers/unavailable";
import {NmcStoreInfoComponent} from "./containers/store-info";
import {AuthGuard} from "./guards/auth.guard";
import {ClarityModule} from "clarity-angular";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    UnavailableComponent,
    NmcStoreInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ComponentsModule,
    MaterialModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

}
