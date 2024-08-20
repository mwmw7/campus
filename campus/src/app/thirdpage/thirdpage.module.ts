import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdpagePageRoutingModule } from './thirdpage-routing.module';

import { ThirdpagePage } from './thirdpage.page';
import {TopBarComponent} from "../top-bar/top-bar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdpagePageRoutingModule,
    TopBarComponent
  ],
  declarations: [ThirdpagePage]
})
export class ThirdpagePageModule {}
