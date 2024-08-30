import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClasssignupPageRoutingModule } from './classsignup-routing.module';

import { ClasssignupPage } from './classsignup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasssignupPageRoutingModule
  ],
  declarations: [ClasssignupPage]
})
export class ClasssignupPageModule {}
