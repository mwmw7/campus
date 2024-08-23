import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyroomPage } from './studyroom.page';

const routes: Routes = [
  {
    path: '',
    component: StudyroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyroomPageRoutingModule {}
