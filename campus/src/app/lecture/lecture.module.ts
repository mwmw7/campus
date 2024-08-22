import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LecturePageRoutingModule } from './lecture-routing.module';

import { LecturePage } from './lecture.page';
import {StudyroommainPageModule} from "../studyroommain/studyroommain.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LecturePageRoutingModule,
        StudyroommainPageModule
    ],
  declarations: [LecturePage]
})
export class LecturePageModule {}
