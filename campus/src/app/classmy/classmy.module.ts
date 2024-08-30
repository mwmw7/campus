import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassmyPageRoutingModule } from './classmy-routing.module';

import { ClassmyPage } from './classmy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassmyPageRoutingModule
  ],
  declarations: [ClassmyPage]
})
export class ClassmyPageModule {}
