import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudyroomPageRoutingModule } from './studyroom-routing.module';

import { StudyroomPage } from './studyroom.page';
import {SidemenuComponent} from "../../component/sidemenucomponent/sidemenu.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StudyroomPageRoutingModule,
        SidemenuComponent
    ],
  declarations: [StudyroomPage]
})
export class StudyroomPageModule {}
