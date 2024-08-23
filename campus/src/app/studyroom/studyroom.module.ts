import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyroomPageRoutingModule } from './studyroom-routing.module';

import { StudyroomPage } from './studyroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyroomPageRoutingModule
  ],
  declarations: [StudyroomPage]
})
export class StudyroomPageModule {}
