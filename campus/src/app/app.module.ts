import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { AttendanceModalComponent } from './component/attendance-modal/attendance-modal.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SidemenuComponent } from './component/sidemenucomponent/sidemenu.component';
import {TopBarComponent} from "./component/top-bar/top-bar.component";
import {HttpClientModule} from "@angular/common/http";
import { CommonModule } from '@angular/common';
import{ExhibitionComponent} from "./exhibitionpage/exhibition/exhibition.component";

@NgModule({
  declarations: [AppComponent, AttendanceModalComponent],

  imports: [BrowserModule, ReactiveFormsModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    TopBarComponent,
    CommonModule,
    ExhibitionComponent,
    FormsModule, SidemenuComponent,

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
