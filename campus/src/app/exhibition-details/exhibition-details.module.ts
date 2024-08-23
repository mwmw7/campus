import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExhibitionDetailsPageRoutingModule } from './exhibition-details-routing.module';

import { ExhibitionDetailsPage } from './exhibition-details.page';
import {TopBarComponent} from "../top-bar/top-bar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExhibitionDetailsPageRoutingModule,
    TopBarComponent
  ],
  declarations: [ExhibitionDetailsPage]
})
export class ExhibitionDetailsPageModule {}
