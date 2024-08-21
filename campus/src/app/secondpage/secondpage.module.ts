import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondpagePageRoutingModule } from './secondpage-routing.module';

import { SecondpagePage } from './secondpage.page';
import {TopBarComponent} from "../top-bar/top-bar.component";
import {CardComponent} from "../cardcomponent/cardcomponent.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondpagePageRoutingModule,
    TopBarComponent,
    CardComponent
  ],
  declarations: [SecondpagePage]
})
export class SecondpagePageModule {}
