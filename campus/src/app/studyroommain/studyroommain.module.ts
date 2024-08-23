import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyroommainPageRoutingModule } from './studyroommain-routing.module';

import { StudyroommainPage } from './studyroommain.page';
import {StudyroomSideBarComponent} from "../studyroom-side-bar/studyroom-side-bar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyroommainPageRoutingModule,

  ],
  exports: [
    StudyroomSideBarComponent
  ],
  declarations: [StudyroommainPage, StudyroomSideBarComponent]

})
export class StudyroommainPageModule {
}
