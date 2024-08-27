import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

// @ts-ignore
import { ExhibitionmainPageRoutingModule } from './exhibitionmain-routing.module';

// @ts-ignore
import { ExhibitionmainPage } from './exhibitionmain.page';
import {TopBarComponent} from "../top-bar/top-bar.component";
import {CardComponent} from "../cardcomponent/cardcomponent.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExhibitionmainPageRoutingModule,
    TopBarComponent,
    CardComponent
  ],
  declarations: [ExhibitionmainPage]
})
export class ExhibitionmainPageModule {}
