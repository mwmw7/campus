import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectmyPageRoutingModule } from './projectmy-routing.module';

import { ProjectmyPage } from './projectmy.page';
import {SidemenuComponent} from "../sidemenucomponent/sidemenu.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectmyPageRoutingModule,
    SidemenuComponent
  ],
  declarations: [ProjectmyPage]
})
export class ProjectmyPageModule {}
