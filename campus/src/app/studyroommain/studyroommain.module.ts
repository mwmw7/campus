import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyroommainPageRoutingModule } from './studyroommain-routing.module';

import { StudyroommainPage } from './studyroommain.page';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { SidemenuComponent } from '../sidemenucomponent/sidemenu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudyroommainPageRoutingModule,
    TopBarComponent,
    SidemenuComponent,
  ],
  declarations: [StudyroommainPage]
})
export class StudyroommainPageModule {}
