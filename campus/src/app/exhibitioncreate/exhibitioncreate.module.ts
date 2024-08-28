import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExhibitioncreatePageRoutingModule } from './exhibitioncreate-routing.module';

import { ExhibitioncreatePage } from './exhibitioncreate.page';
import {TopBarComponent} from "../top-bar/top-bar.component";
import {CardComponent} from "../cardcomponent/cardcomponent.component";
import {ExhibitionComponent} from "../exhibition/exhibition.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExhibitioncreatePageRoutingModule,
    TopBarComponent,
    CardComponent,
    ExhibitionComponent
  ],
  declarations: [ExhibitioncreatePage]
})
export class ExhibitioncreatePageModule {}
