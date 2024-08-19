import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyroommainPage } from './studyroommain.page';

const routes: Routes = [
  {
    path: '',
    component: StudyroommainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyroommainPageRoutingModule {}
