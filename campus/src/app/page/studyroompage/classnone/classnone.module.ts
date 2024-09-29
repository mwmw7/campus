import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassnonePageRoutingModule } from './classnone-routing.module';

import { ClassnonePage } from './classnone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassnonePageRoutingModule
  ],
  declarations: [ClassnonePage]
})
export class ClassnonePageModule {}
