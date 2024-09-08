import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntroduceMetaversePageRoutingModule } from './introduce-metaverse-routing.module';

import { IntroduceMetaversePage } from './introduce-metaverse.page';
import {TopBarComponent} from "../top-bar/top-bar.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IntroduceMetaversePageRoutingModule,
        TopBarComponent
    ],
  declarations: [IntroduceMetaversePage]
})
export class IntroduceMetaversePageModule {}
