import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyroommainPageRoutingModule } from './studyroomMain-routing.module';

import { StudyroommainPage } from './studyroomMain.page';

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
