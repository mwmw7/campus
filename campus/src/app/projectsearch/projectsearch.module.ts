import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectsearchPageRoutingModule } from './projectsearch-routing.module';

import { ProjectsearchPage } from './projectsearch.page';
import {SidemenuComponent} from "../sidemenucomponent/sidemenu.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectsearchPageRoutingModule,
    SidemenuComponent
  ],
  declarations: [ProjectsearchPage]
})
export class ProjectsearchPageModule {}
