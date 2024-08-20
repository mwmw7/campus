import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstpagePageRoutingModule } from './firstpage-routing.module';

import { FirstpagePage } from './firstpage.page';
import {TopBarComponent} from "../top-bar/top-bar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstpagePageRoutingModule,
    TopBarComponent
  ],
  declarations: [FirstpagePage]
})
export class FirstpagePageModule {}
