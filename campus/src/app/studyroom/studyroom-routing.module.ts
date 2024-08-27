import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyroomPage } from './studyroom.page';

const routes: Routes = [
  {
    path: '',
    component: StudyroomPage,
    children: [
      {
        path: 'page/:id',
        loadChildren: () => import('../page/page.module').then(m => m.PagePageModule)
      },
      // 다른 하위 경로들
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudyroomPageRoutingModule {}
