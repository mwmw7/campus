import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExhibitioncreatePageRoutingModule } from './exhibitioncreate-routing.module';

import { ExhibitioncreatePage } from './exhibitioncreate.page';
import {TopBarComponent} from "../top-bar/top-bar.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExhibitioncreatePageRoutingModule,
        TopBarComponent
    ],
  declarations: [ExhibitioncreatePage]
})
export class ExhibitioncreatePageModule {}
