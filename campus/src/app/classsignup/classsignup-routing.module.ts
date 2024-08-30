import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasssignupPage } from './classsignup.page';

const routes: Routes = [
  {
    path: '',
    component: ClasssignupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasssignupPageRoutingModule {}
