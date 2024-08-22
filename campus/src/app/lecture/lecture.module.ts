import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturePageRoutingModule } from './lecture-routing.module';

import { LecturePage } from './lecture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LecturePageRoutingModule
  ],
  declarations: [LecturePage]
})
export class LecturePageModule {}
