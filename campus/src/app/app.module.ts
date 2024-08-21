import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidemenuComponent } from './sidemenucomponent/sidemenu.component';
import {TopBarComponent} from "./top-bar/top-bar.component";
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
    imports: [BrowserModule, ReactiveFormsModule,
      IonicModule.forRoot(),
      HttpClientModule,
      AppRoutingModule,
      TopBarComponent,
      SidemenuComponent,
      CommonModule,
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
