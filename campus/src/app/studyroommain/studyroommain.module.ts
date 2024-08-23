import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyroommainPageRoutingModule } from './studyroommain-routing.module';

import { StudyroommainPage } from './studyroommain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyroommainPageRoutingModule
  ],
  declarations: [StudyroommainPage]
})
export class StudyroommainPageModule {}
