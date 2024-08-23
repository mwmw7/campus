import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudyroommainPage } from './studyroommain.page';

const routes: Routes = [
  {
    path: '', // 경로를 ''로 수정
    component: StudyroommainPage // 컴포넌트를 지정
  },
  {
    path: 'lecture/:id',
    loadChildren: () => import('../lecture/lecture.module').then( m => m.LecturePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // forChild로 변경
  exports: [RouterModule]
})
export class StudyroommainPageRoutingModule {}
