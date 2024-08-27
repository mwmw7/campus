import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagePageRoutingModule } from './page-routing.module';

import { PagePage } from './page.page';
import {ProjectComponent} from "../pages/project/project.component";
import {LectureComponent} from "../pages/lecture/lecture.component";
import {HomeComponent} from "../pages/home/home.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagePageRoutingModule
  ],
  declarations: [PagePage, ProjectComponent, LectureComponent, HomeComponent]
})
export class PagePageModule {}
