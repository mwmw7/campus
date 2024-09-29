import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassnonePage } from './classnone.page';

const routes: Routes = [
  {
    path: '',
    component: ClassnonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassnonePageRoutingModule {}
