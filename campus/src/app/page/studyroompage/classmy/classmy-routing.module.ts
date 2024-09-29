import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassmyPage } from './classmy.page';

const routes: Routes = [
  {
    path: '',
    component: ClassmyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassmyPageRoutingModule {}
