import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinpagePageRoutingModule } from './joinpage-routing.module';

import { JoinpagePage } from './joinpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinpagePageRoutingModule
  ],
  declarations: [JoinpagePage]
})
export class JoinpagePageModule {}
