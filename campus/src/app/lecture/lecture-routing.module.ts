import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LecturePage } from './lecture.page';

const routes: Routes = [
  {
    path: '',
    component: LecturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LecturePageRoutingModule {}
